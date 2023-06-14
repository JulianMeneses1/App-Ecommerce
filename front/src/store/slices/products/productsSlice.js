import { createSlice } from "@reduxjs/toolkit";

export const initialProducts = JSON.parse(sessionStorage.getItem('products')) || []

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        initialLogin,
        isSignIn: true
    },
    reducers: {
        onToggleSignIn: (state) => {
            state.isSignIn = !state.isSignIn
        },
        onLogin: (state, action) => {
            state.isAuth = true,
            state.isAdmin = action.payload.isAdmin,
            state.user = action.payload.user,
            state.isLoginLoading = false;
        },
        onLogout: (state) => {
            state.isAuth = false,
            state.isAdmin = false,
            state.user = undefined,
            state.isLoginLoading = false;
        },
        onInitLogin: (state) => {
            state.isLoginLoading = true;
        }
    }
});

export const {
    onLogin,
    onLogout,
    onInitLogin,
    onToggleSignIn
} = authSlice.actions