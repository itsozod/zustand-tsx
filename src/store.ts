import { create } from "zustand";
export type CartItem = {
  id: number;
  images: string[];
  title: string;
};

type Cart = {
  cart: CartItem[];
  cartCount: number;
  cartCountResult: number;
  setCartCountResult: (cartCountResult: number) => void;
  setCartCount: (cartCount: number) => void;
  addToCart: (value: CartItem) => void;
  deleteFromCart: (value: CartItem) => void;
};

export const useCartStore = create<Cart>()((set) => ({
  cart: [],
  cartCount: 0,
  cartCountResult: 0,
  setCartCountResult: (value) =>
    set((state) => ({ cartCountResult: (state.cartCountResult = value) })),
  setCartCount: (value) =>
    set((state) => ({ cartCount: (state.cartCount = value) })),
  addToCart: (value) => set((state) => ({ cart: [...state.cart, value] })),
  deleteFromCart: (value) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== value.id),
    })),
}));
