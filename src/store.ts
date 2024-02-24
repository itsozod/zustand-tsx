import { create } from "zustand";
type Count = {
  count: number;
  increment: () => void;
  value: string;
  changeValue: (value: string) => void;
  incByValue: (value: number) => void;
};

export const useCountStore = create<Count>()((set) => ({
  count: 0,
  value: "",
  increment: () => set((state) => ({ count: state.count + 1 })),
  incByValue: (value) => set((state) => ({ count: state.count + value })),
  changeValue: (value) => set((state) => ({ value: (state.value = value) })),
}));
