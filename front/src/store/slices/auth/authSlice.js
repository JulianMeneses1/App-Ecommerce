import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined,
    isLoginLoading: false
}


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: initialLogin,
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