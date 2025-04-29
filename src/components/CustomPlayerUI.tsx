import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Pause, Play, Volume2, VolumeX, Music, MusicIcon, Music2 } from 'lucide-react';
import { Howl } from 'howler';
import { CustomMusicIcon } from './icons';

// Custom audio player interface
interface CustomAudioPlayerProps {
    // UI Control Props
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    bgVolume: number;
    // Control functions
    onPlayPause: () => void;
    onTimeChange: (time: number) => void;
    onVolumeChange: (volume: number) => void;
    onToggleMute: () => void;
    onBgVolumeChange: (volume: number) => void;
    className?: string;
}

// CustomAudioPlayer component ref interface
export interface CustomAudioRef {
    play: () => void;
    pause: () => void;
}

export const CustomPlayerUI = forwardRef<CustomAudioRef, CustomAudioPlayerProps>(({
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    bgVolume,
    onPlayPause,
    onTimeChange,
    onVolumeChange,
    onToggleMute,
    onBgVolumeChange,
    className
}, ref) => {
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    const volumeButtonRef = useRef<HTMLButtonElement>(null);
    const [showHarmonyVolumeControl, setShowHarmonyVolumeControl] = useState(false);
    const harmonyButtonRef = useRef<HTMLButtonElement>(null);

    // Expose the play and pause methods through the ref
    useImperativeHandle(ref, () => ({
        play: () => {
            if (!isPlaying) {
                onPlayPause();
            }
        },
        pause: () => {
            if (isPlaying) {
                onPlayPause();
            }
        }
    }));

    // Determine if harmony is effectively playing based on volume
    const isHarmonyEffectivelyPlaying = bgVolume > 0;

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        onTimeChange(newTime);
    };

    const toggleVolumeControl = () => {
        setShowVolumeControl(!showVolumeControl);
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Calculate progress percentage for the progress bar
    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className={cn("flex flex-col", className)}>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <button
                        ref={harmonyButtonRef}
                        onClick={() => setShowHarmonyVolumeControl(!showHarmonyVolumeControl)}
                        className="text-yellow-500/70 hover:text-yellow-400 transition-colors pt-2"
                        aria-label={isHarmonyEffectivelyPlaying ? 'Harmony Settings' : 'Harmony Off'}
                    >
                        <CustomMusicIcon className="h-4 w-4" off={!isHarmonyEffectivelyPlaying} />
                    </button>

                    <VerticalVolumeSlider
                        volume={bgVolume}
                        onChange={onBgVolumeChange}
                        buttonRef={harmonyButtonRef}
                        showControl={showHarmonyVolumeControl}
                        setShowControl={setShowHarmonyVolumeControl}
                    />
                </div>

                <button
                    onClick={onPlayPause}
                    className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                    {isPlaying ?
                        <Pause size={20} className="fill-yellow-500" /> :
                        <Play size={20} className="fill-yellow-500" />}
                </button>

                <span className="text-xs text-yellow-500/70 min-w-[35px]">{formatTime(currentTime)}</span>

                <div className="flex-1 relative h-1 bg-gray-700/50 rounded-full overflow-hidden">
                    <div
                        className="absolute h-full bg-yellow-500 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                    />
                    <input
                        type="range"
                        min={0}
                        max={duration || 100}
                        value={currentTime}
                        onChange={handleTimeChange}
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                    />
                </div>

                <span className="text-xs text-yellow-500/70 min-w-[35px] text-right">{formatTime(duration)}</span>

                {/* Wrapper for Main Volume Control */}
                <div className="relative">
                    <button
                        ref={volumeButtonRef}
                        onClick={toggleVolumeControl}
                        className="text-yellow-500/80 hover:text-yellow-400 transition-colors"
                    >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>

                    <VerticalVolumeSlider
                        volume={volume}
                        onChange={onVolumeChange}
                        buttonRef={volumeButtonRef}
                        showControl={showVolumeControl}
                        setShowControl={setShowVolumeControl}
                    />
                </div>


            </div>
        </div>
    );
});

interface VerticalVolumeSliderProps {
    volume: number;
    onChange: (volume: number) => void;
    buttonRef: React.RefObject<HTMLButtonElement>; // Ref of the button that toggles this slider
    showControl: boolean;
    setShowControl: (show: boolean) => void;
    className?: string;
}

const VerticalVolumeSlider: React.FC<VerticalVolumeSliderProps> = ({
    volume,
    onChange,
    buttonRef,
    showControl,
    setShowControl,
    className,
}) => {
    const volumeControlRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside volume control to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                showControl &&
                volumeControlRef.current &&
                buttonRef.current &&
                !volumeControlRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setShowControl(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showControl, setShowControl, buttonRef]);

    const handleVolumeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        onChange(newVolume);
    };

    if (!showControl) {
        return null;
    }

    return (
        <div
            ref={volumeControlRef}
            className={cn(
                "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black border border-yellow-500/20 rounded-md p-2 shadow-md flex flex-col items-center z-20", // Added z-index
                className
            )}
            // Prevent clicks inside the control from propagating and triggering the outside click handler immediately
            onMouseDown={(e) => e.stopPropagation()}
        >
            <div className="h-20 w-2 bg-gray-700/50 rounded-full relative">
                <div
                    className="absolute bottom-0 w-full bg-yellow-500 rounded-full"
                    style={{
                        height: `${volume * 100}%`,
                    }}
                ></div>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={volume}
                    onChange={handleVolumeInputChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    style={{
                        WebkitAppearance: 'slider-vertical',
                        writingMode: 'vertical-lr' as any,
                        transform: 'rotate(180deg)',
                    }}
                    aria-label="Volume"
                />
            </div>
        </div>
    );
};
