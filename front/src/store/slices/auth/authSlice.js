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
            state.login.isAuth = true,
            state.login.isAdmin = action.payload.isAdmin,
            state.login.user = action.payload.user,
            state.login.isLoginLoading = false;
        },
        onLogout: (state) => {
            state.login.isAuth = false,
            state.login.isAdmin = false,
            state.login.user = undefined,
            state.login.isLoginLoading = false;
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