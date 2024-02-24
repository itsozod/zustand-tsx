import { create } from "zustand";
type Count = {
  count: number;
  increment: () => void;
  incByValue: (value: number) => void;
};

export const useCountStore = create<Count>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incByValue: (value) => set((state) => ({ count: state.count + value })),
}));
