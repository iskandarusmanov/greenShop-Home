import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { list: [], total: 0 },
  reducers: {
    addToCart(state, action) {
      const check = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (check === -1) {
        state.list.push(action.payload);
      }

      state.total = state.list.reduce(
        (sum, item) => sum + +item?.price * item?.quantity,
        0
      );
    },

    addQuantity(state, action) {
      const check = state.list.findIndex(
        (item) => item.id === action.payload.id
      );

      state.list[check].quantity += 1;
    },

    reduceQuantity(state, action) {
        const check = state.list.findIndex(
            (item) => item.id === action.payload.id
          );
    
          state.list[check].quantity -= 1;
    },

    removeItem(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
      state.total = state.list.reduce(
        (sum, book) => sum + +book?.price * book?.quantity,
        0
      );
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, addQuantity, reduceQuantity, removeItem } = cartSlice.actions;
