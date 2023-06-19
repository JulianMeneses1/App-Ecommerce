import { createSlice } from "@reduxjs/toolkit";

export const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    isAdmin: false,
    user: undefined
}

export const initialErrors = {
    email: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: initialLogin,
        isSignIn: true,
        errors: initialErrors,
        isLoginLoading: false
    },
    reducers: {
        onToggleSignIn: (state) => {
            state.isSignIn = !state.isSignIn
        },
        onLogin: (state, action) => {
            state.login.isAuth = true,
            state.login.isAdmin = action.payload.isAdmin,
            state.login.user = action.payload.user,
            state.isLoginLoading = false;
        },
        onLogout: (state) => {
            state.login.isAuth = false,
            state.login.isAdmin = false,
            state.login.user = undefined,
            state.isLoginLoading = false
        },
        onCreateUser: (state) => {
            state.isCreatingUserLoading = false;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        onLoading: (state) => {            
            state.isLoginLoading = true
        },
        finishLoading: (state) => {
            state.isLoginLoading = false
        }    
    }
});

export const {
    onLogin,
    onLogout,    
    onLoading,
    onToggleSignIn,
    isLoginLoading,
    finishLoading,
    setErrors,
    onCreateUser
} = authSlice.actions