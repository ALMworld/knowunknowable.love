import {Address} from "viem";
import {Gua} from "@/stores/Gua.ts";

export type VerifyStatus = 'idle' | 'verifying' | 'verified' | 'unverified';
export type VerificationIntent = 'idle' | 'view' | 'unlock'

// export type ModalType = 'login' | 'subscribe' | 'invest' | 'joinCommunityLottery' | 'willSignature' | 'enlightenment' | 'gua';

export enum ModalType {
    // LOGIN = 'LOGIN',
    WILL_SIGNATURE = 'WILL_SIGNATURE',
    ENLIGHTENMENT = 'ENLIGHTENMENT',
    GUA = 'GUA',
    INVEST = 'INVEST',
    VERIFICATION = 'VERIFICATION',
    CONNECT_DAO = 'CONNECT_DAO',
    // JOIN_COMMUNITY_LOTTERY = 'joinCommunityLottery',
}


export type SpeedMode = "slow" | "normal" | "fast";

export const SpeedModeConfig: Record<SpeedMode, { label: string, speed: number, next: SpeedMode }> = {
    slow: { label: "Slow", speed: 0.05, next: "normal" },
    normal: { label: "Normal", speed: 0.1, next: "fast" },
    fast: { label: "Fast", speed: 0.2, next: "slow" }
}


export type CommonResponse<T> = {
    success: boolean;
    message: string;
    data: T;
    cursor?: number | null;
};



export type Interpretation = {
    interpretation: string;
    dao_tx: string;
    dao_tx_amount: number;
}

export type UserData = {
    address: Address;
    expire_at: number;
};

export type NonceData = {
    nonce: string;
}

export type DivinationRequest = {
    will: string;
    will_signature: string;
    will_hash: string;
    manifestation: string;
    interpretation: string;
    visibility: number;
    dao_money: number;
    dao_hash: string;

    //
    lang: string;
    gua: string;
    mutability: boolean[];
};


// Types for divination entries
export interface DivinationEntry {
    uuid: string;  // bytes16
    diviner: string;
    visibility: number;
    lang: string;
    will: string;
    will_hash: string;
    will_signature: string;
    manifestation: string; // bytes16
    interpretation: string;
    dao_tx: string;
    dao_tx_amount: number;
    // 0: Unknown, 1: Verified Pass, 2: Verified Reject, 3: Deprecated
    known_status: number;
    known_at: number;
    created_at: number;
    gua: Gua;
}

export interface DivinationResponse {
    success: boolean;
    data: DivinationEntry[];
    cursor: number | null;
}

export interface DivinationPageRequest {
    cursor: number | null;
    pageSize: number;
}

export interface DivinationDetailResponse {
    success: boolean;
    data: DivinationEntry;
}

// {
//     "tx_hash": "0x44bc316691623a4e32d9375b3817f50b95552ffceed1d195e00e878cdbeb265b",
//     "diviner": "0x40977C4706851E4c052356885957E61D74A9E4Ba",
//     "block_number": 35,
//     "event_type": "DukiInAction",
//     "event_interact_type": null,
//     "event_data": {
//         "user": "0x40977C4706851E4c052356885957E61D74A9E4Ba",
//         "interactType": 0,
//         "daoEvolveRound": 2,
//         "amount": 3000000,
//         "unitNumber": 1,
//         "timestamp": 1745303636,
//         "metaDomain": ""
//     }
// }

export interface DaoEvent {
    tx_hash: string;
    diviner: string;
    block_number: number;
    event_type: string;
    event_interact_type: number | null;
    event_data: {
        user: string;
        interactType: number;
        daoEvolveRound: number;
        amount: number;
        unitNumber: number;
        timestamp: number;
        metaDomain: string;
    }
}
export interface Transaction {
    timestamp: number;
    txHash: string;
    account: string;
    amount: number;
    interactType: number;
    evolveNum: number;
}

