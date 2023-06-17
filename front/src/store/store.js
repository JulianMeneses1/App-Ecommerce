import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { productsSlice } from "./slices/products/productsSlice";
import { cartSlice } from "./slices/cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
})