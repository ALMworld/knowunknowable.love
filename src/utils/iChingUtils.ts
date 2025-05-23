import {Section} from "@/types/i_ching_types";

export const commonIChingMap = {
    "000000": { "num": 2, "symbol": "䷁" }, "000001": { "num": 24, "symbol": "䷖" }, "000010": { "num": 7, "symbol": "䷇" }, "000011": { "num": 19, "symbol": "䷓" },
    "000100": { "num": 15, "symbol": "䷏" }, "000101": { "num": 36, "symbol": "䷢" }, "000110": { "num": 46, "symbol": "䷬" }, "000111": { "num": 11, "symbol": "䷋" },
    "001000": { "num": 16, "symbol": "䷎" }, "001001": { "num": 51, "symbol": "䷳" }, "001010": { "num": 40, "symbol": "䷦" }, "001011": { "num": 54, "symbol": "䷴" },
    "001100": { "num": 62, "symbol": "䷽" }, "001101": { "num": 55, "symbol": "䷷" }, "001110": { "num": 32, "symbol": "䷞" }, "001111": { "num": 34, "symbol": "䷠" },
    "010000": { "num": 8, "symbol": "䷆" }, "010001": { "num": 3, "symbol": "䷃" }, "010010": { "num": 29, "symbol": "䷜" }, "010011": { "num": 60, "symbol": "䷺" },
    "010100": { "num": 39, "symbol": "䷧" }, "010101": { "num": 63, "symbol": "䷿" }, "010110": { "num": 48, "symbol": "䷮" }, "010111": { "num": 5, "symbol": "䷅" },
    "011000": { "num": 45, "symbol": "䷭" }, "011001": { "num": 17, "symbol": "䷑" }, "011010": { "num": 47, "symbol": "䷯" }, "011011": { "num": 58, "symbol": "䷸" },
    "011100": { "num": 31, "symbol": "䷟" }, "011101": { "num": 49, "symbol": "䷱" }, "011110": { "num": 28, "symbol": "䷛" }, "011111": { "num": 43, "symbol": "䷫" },
    "100000": { "num": 23, "symbol": "䷗" }, "100001": { "num": 27, "symbol": "䷚" }, "100010": { "num": 4, "symbol": "䷂" }, "100011": { "num": 41, "symbol": "䷩" },
    "100100": { "num": 52, "symbol": "䷲" }, "100101": { "num": 22, "symbol": "䷔" }, "100110": { "num": 18, "symbol": "䷐" }, "100111": { "num": 26, "symbol": "䷘" },
    "101000": { "num": 35, "symbol": "䷣" }, "101001": { "num": 21, "symbol": "䷕" }, "101010": { "num": 64, "symbol": "䷾" }, "101011": { "num": 38, "symbol": "䷤" },
    "101100": { "num": 56, "symbol": "䷶" }, "101101": { "num": 30, "symbol": "䷝" }, "101110": { "num": 50, "symbol": "䷰" }, "101111": { "num": 14, "symbol": "䷌" },
    "110000": { "num": 20, "symbol": "䷒" }, "110001": { "num": 42, "symbol": "䷨" }, "110010": { "num": 59, "symbol": "䷻" }, "110011": { "num": 61, "symbol": "䷼" },
    "110100": { "num": 53, "symbol": "䷵" }, "110101": { "num": 37, "symbol": "䷥" }, "110110": { "num": 57, "symbol": "䷹" }, "110111": { "num": 9, "symbol": "䷉" },
    "111000": { "num": 12, "symbol": "䷊" }, "111001": { "num": 25, "symbol": "䷙" }, "111010": { "num": 6, "symbol": "䷄" }, "111011": { "num": 10, "symbol": "䷈" },
    "111100": { "num": 33, "symbol": "䷡" }, "111101": { "num": 13, "symbol": "䷍" }, "111110": { "num": 44, "symbol": "䷪" }, "111111": { "num": 1, "symbol": "䷀" }
};

export const commonIChingBinaryOrder = Object.keys(commonIChingMap).sort((a, b) => parseInt(a) - parseInt(b));

export const commonIChingBinaryList = [...commonIChingBinaryOrder.slice(0, 32), ...commonIChingBinaryOrder.slice(32).reverse()];

const generationProgressUnitsMap = {
    "☯️": { "num": "", "symbol": "☯️" },
    "0": { "num": 0, "symbol": "⚋" },
    "1": { "num": 1, "symbol": "⚊" },
    "00": { "num": 0, "symbol": "⚏" },
    "01": { "num": 1, "symbol": "⚎" },
    "10": { "num": 2, "symbol": "⚍" },
    "11": { "num": 3, "symbol": "⚌" },
    "000": { "num": 0, "symbol": "☷" },
    "001": { "num": 1, "symbol": "☶" },
    "010": { "num": 2, "symbol": "☵" },
    "011": { "num": 3, "symbol": "☴" },
    "100": { "num": 4, "symbol": "☳" },
    "101": { "num": 5, "symbol": "☲" },
    "110": { "num": 6, "symbol": "☱" },
    "111": { "num": 7, "symbol": "☰" },
}
export const binaryIChingMap = { ...generationProgressUnitsMap, ...commonIChingMap };


const publicLoveLoveColor = "#b31900";
const privateLoveSinColor = "#FACC15";
const daoLoveColor = "#C084FC";

export enum Trigram {
    Heaven_Qian_1_ALM, // 1 ☰ Qian - Heaven/Sky suggest 2.5%
    Lake_Dui_2_Nation, // 2 ☱ Dui - Lake/Marsh  suggest 2.5% . (no more than 5% total, need compete with others who do not give; maybe a fitness loss if kindness do not begets kindness)
    Fire_Li_3_Community, //3 ☲ Li - Fire, Community, Currently has Lottery, currently be like marketing
    Thunder_Zhen_4_Builders, //4 ☳ Zhen - Thunder, Other Creators That Are Building for Duki in Action
    Wind_Xun_5_Contributors, //5 ☴ Xun - Wind/Wood, Contributors
    Water_Kan_6_Investors, // 6  ☵ Kan - Water, investors
    Mountain_Gen_7_Maintainers, // 7 ☶ Gen - Mountain, creators, #may need pay taxes
    Earth_Kun_8_Creators // 8 ☷ Kun - Earth, survival and existence, sin,

}


export const getWillColor = (number: number): string => {
    if (number === 8) {
        return daoLoveColor;
    }
    return number <= 4 ? publicLoveLoveColor : privateLoveSinColor;
}


export const DualityDaoLoveSection: Section =
    {
        id: 'Dao',
        bid: '☯',
        ch_symbol: '',
        cn_seq: 9,
        seq: 8,
        supportClaimed: false,
        arr_index: 0,
        percentage: 100,
        color: "#C084FC",
        opacity: 1,

    }

export const BaguaSections: Section[] = [
    {
        id: 'Earth',
        bid: "000",
        ch_symbol: 'Kun',
        cn_seq: 8,
        seq: 0,
        arr_index: 5,
        supportClaimed: true,
        percentage: 25,
        color: privateLoveSinColor,
        opacity: 1,
    },
    {
        id: 'Mountain',
        bid: "001",
        ch_symbol: 'Gen',
        cn_seq: 7,
        seq: 1,
        arr_index: 6,
        supportClaimed: true,
        percentage: 25,
        color: privateLoveSinColor,
        opacity: 0.75,
    },
    {
        id: 'Water',
        bid: "010",
        ch_symbol: 'Kan',
        cn_seq: 6,
        seq: 2,
        arr_index: 7,
        supportClaimed: true,
        percentage: 0,
        color: privateLoveSinColor,
        opacity: 0.5,
    },
    {
        id: 'Wind',
        bid: "011",
        ch_symbol: 'Xun',
        cn_seq: 5,
        seq: 3,
        arr_index: 8,
        supportClaimed: true,
        percentage: 0,
        color: privateLoveSinColor,
        opacity: 0.25,
    },

    {
        id: 'Thunder',
        bid: "100",
        ch_symbol: 'Zhen',
        cn_seq: 4,
        seq: 4,
        arr_index: 4,
        supportClaimed: true,
        percentage: 0,
        color: publicLoveLoveColor,
        opacity: 0.75,
    },
    {
        id: 'Fire',
        bid: "101",
        ch_symbol: 'Li',
        cn_seq: 3,
        seq: 5,
        arr_index: 3,
        supportClaimed: true,
        percentage: 0,
        color: publicLoveLoveColor,
        opacity: 0.75,

    },
    {
        id: 'Marsh',
        bid: "110",
        ch_symbol: 'Dui',
        cn_seq: 2,
        seq: 6,
        arr_index: 2,
        supportClaimed: false,
        percentage: 2.5,
        color: publicLoveLoveColor,
        opacity: 0.75,
    },

    {
        id: 'Heaven',
        bid: "111",
        ch_symbol: 'Qian',
        cn_seq: 1,
        seq: 7,
        arr_index: 1,
        supportClaimed: true,
        percentage: 2.5,
        color: publicLoveLoveColor,
        opacity: 1,
    },
    DualityDaoLoveSection,
];