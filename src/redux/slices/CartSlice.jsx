import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { 
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push({ ...action.payload, qty: 1 }); // Ensure new items start with qty 1
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      // Optionally remove the item if qty reaches 0
      state.cart = state.cart.filter(item => item.qty > 0);
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  CartSlice.actions;
export default CartSlice.reducer;
