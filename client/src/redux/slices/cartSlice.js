import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

 const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    manageCart(state, action) {
      const isInCart = state.cart.find((item) => item.id === action.payload.id);
      if (isInCart) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    getCart(state, action) {
      state.cart = action.payload;
    },
  },
});

export const { manageCart, getCart } = cartSlice.actions;
export default cartSlice.reducer;
