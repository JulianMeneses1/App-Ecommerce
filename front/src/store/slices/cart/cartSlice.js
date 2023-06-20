import { createSlice } from "@reduxjs/toolkit";

export const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: initialCartItems        
    },
    reducers: {
        addProductCart: (state, {payload}) => {
            state.cartItems = [
                ...state.cartItems,
                {
                    product : payload.product,
                    quantity: payload.quantity
                }
            ]              
        },
        updateQuantityProductCart: (state, {payload}) => {
            state.cartItems = state.cartItems.map((item)=> {
                if (item.product.id == payload.product.id) {
                    return {
                        ...item,
                        quantity: payload.quantity
                    };
                };
                return item;
            })
        },
        deleteProductCart: (state, {payload}) => {
            state.cartItems = [
                ...state.cartItems.filter((item)=> item.product.id !== payload)
            ]
        },
        resetCart: (state) => {
            state.cartItems = [];
        }      
    }
});

export const {
    updateQuantityProductCart,
    addProductCart,
    deleteProductCart,
    resetCart,
    cartItems   
} = cartSlice.actions