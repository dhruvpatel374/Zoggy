import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    // we can give any name like abcReducer etc...
    cart: cartReducer,
  },
});
export default appStore;
