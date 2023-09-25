import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [],
  // totalPrice: 0,
  // numItems: 0,
  cart: [
    {
      pizzaId: 1,
      name: "Pizza",
      quantity: 2,
      unitPrice: 12,
      totalPrice: 20,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // updateItem(state, action) {},
    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, decreaseItem, increaseItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
