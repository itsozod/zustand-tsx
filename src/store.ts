import { create } from "zustand";
export type CartItem = {
  id: number;
  images: string[];
  title: string;
};

type Cart = {
  cart: CartItem[];
  addToCart: (value: CartItem) => void;
};

export const useCartStore = create<Cart>()((set) => ({
  cart: [],
  addToCart: (value) => set((state) => ({ cart: [...state.cart, value] })),
}));
