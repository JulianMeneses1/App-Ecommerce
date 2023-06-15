import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { productsSlice } from "./slices/products/productsSlice";

export const store = configureStore({
    // acá definimos los reducers/slices que van a formar parte del store
    reducer: {
        auth: authSlice.reducer,
        products: productsSlice.reducer
    }
})