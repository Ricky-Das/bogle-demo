// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

/********************
 * Type Definitions *
 ********************/
export type User = {
  id: string;
  name: string;
};

export type Wallet = {
  balance: number;
  bankName: string;
  bankLast4: string;
};

export type Transaction = {
  id: string;
  merchantName: string;
  createdAt: string; // ISO string
  amount: number; // negative for debit
  cashback: number;
};

export type Reward = {
  id: string;
  title: string;
  description: string;
  expiresAt: string;
};

/****************
 * Store Slices *
 ****************/
interface UserSlice {
  user: User | null;
  setUser: (user: User | null) => void;
}

interface WalletSlice {
  wallet: Wallet | null;
  setWallet: (wallet: Wallet | null) => void;
  decrementBalance: (amount: number) => void;
}

interface TransactionsSlice {
  transactions: Transaction[];
  setTransactions: (txns: Transaction[]) => void;
  addTransaction: (txn: Transaction) => void;
}

interface RewardsSlice {
  rewards: Reward[];
  rewardsHistory: Reward[];
  setRewards: (rewards: Reward[]) => void;
  setRewardsHistory: (history: Reward[]) => void;
}

export type AppState = UserSlice &
  WalletSlice &
  TransactionsSlice &
  RewardsSlice;

export const useStore = create<AppState>((set, get) => ({
  /** User Slice **/
  user: null,
  setUser: (user: User | null) => set({ user }),

  /** Wallet Slice **/
  wallet: null,
  setWallet: (wallet: Wallet | null) => set({ wallet }),
  decrementBalance: (amount: number) =>
    set((state) => {
      if (!state.wallet) return {} as Partial<AppState>;
      return {
        wallet: { ...state.wallet, balance: state.wallet.balance - amount },
      };
    }),

  /** Transactions Slice **/
  transactions: [],
  setTransactions: (txns: Transaction[]) => set({ transactions: txns }),
  addTransaction: (txn: Transaction) =>
    set((state) => ({ transactions: [txn, ...state.transactions] })),

  /** Rewards Slice **/
  rewards: [],
  rewardsHistory: [],
  setRewards: (rewards: Reward[]) => set({ rewards }),
  setRewardsHistory: (history: Reward[]) => set({ rewardsHistory: history }),
}));
