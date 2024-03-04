import { create } from "zustand";
type CartItem = {
  id: number;
  images: string[];
  img: string;
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
