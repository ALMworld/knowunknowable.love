import * as THREE from 'three';

export type WillState = {
    type: PointWillType;
    position: THREE.Vector3;
    color?: THREE.Color;
}

export type PointUserData = {
    index: number;
    pointEvolveType: PointEvolveType;
    pointType: PointWillType;
    goal: WillState;
}

export enum PointWillType {
    TAIJI = 'will_of_taiji',
    HEAVEN = 'will_of_heaven',
    EARTH = 'will_of_earth',
    HUMANITY = 'will_of_humanity',
    HEAVEN_REMINDER = 'will_of_heaven_reminder',
    EARTH_REMINDER = 'will_of_earth_reminder',
    UNKNOWABLE = 'will_of_unknowable',
}

export enum PointEvolveType {
    FREE = 'free',
    DIRECTED = 'directed',
}

export interface NavItem {
    path: string;
    label: string;
    icon?: React.FC<{ className?: string }>;
}

export type InteractionType = "claim" | "entry";



export type Qualification = {
    title: string;
    requirements_text: string;
    note: string;
    actions?: InteractionType[];
}


export interface Section {
    id: string;
    bid: string;
    ch_symbol: string;
    cn_seq: number;
    arr_index: number;
    seq: number;
    percentage: number;
    color: string;
    opacity: number;
    title?: string;
    description?: string;
    target?: string;
    claimQualification?: Qualification;
    supportClaimed: boolean;
}
