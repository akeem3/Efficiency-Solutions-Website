"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItemType = "branding" | "logistics";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: CartItemType;
  image: string;
  metadata?: {
    size?: string;
    days?: number;
    hasSecurity?: boolean;
    model?: string;
  };
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, type: CartItemType) => void;
  updateQuantity: (id: string, type: CartItemType, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem: CartItem) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.id === newItem.id && item.type === newItem.type
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === newItem.id && item.type === newItem.type
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            ),
          });
        } else {
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (id: string, type: CartItemType) => {
        const { items } = get();
        set({
          items: items.filter((item) => !(item.id === id && item.type === type)),
        });
      },

      updateQuantity: (id: string, type: CartItemType, quantity: number) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(id, type);
          return;
        }

        set({
          items: items.map((item) =>
            item.id === id && item.type === type
              ? { ...item, quantity }
              : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total: number, item: CartItem) => {
          // If Logistics, check if 'days' exists in metadata to multiply correctly
          const multiplier = item.type === "logistics" ? (item.metadata?.days || 1) : 1;
          return total + item.price * item.quantity * multiplier;
        }, 0);
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((count: number, item: CartItem) => count + item.quantity, 0);
      },
    }),
    {
      name: "efficiency-solutions-cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
