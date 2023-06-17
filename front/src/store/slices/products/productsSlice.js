import { createSlice } from "@reduxjs/toolkit";

export const initialErrors = {
    title: ''
}

export const initialProducts = {
    notebooks: [],
    monitores: [],
    pcs: [],
    placasDeVideo: [],
    microprocesadores: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsHome: initialProducts,  
        productsCategories: initialProducts, 
        product: {},  
        errors: initialErrors,  
        isLoadingHome: true,
        isLoadingCategories: true,
        isLoadingProduct: true,
        paginator: {}
    },
    reducers: {
        addProduct: (state, {payload: {category, product}}) => {
            console.log(category, product)
            
            state.productsHome[category] = [
                ...state.productsHome[category], 
                {
                    ...product
                } 
            ]                                 
        },
        removeProduct: (state, {payload: {category, id}}) => {

            state.productsHome[category] = state.productsHome[category].filter(
                (product) => product.id !== id
              );            
        },
        updateProduct:  (state, {payload: {category, product }}) => {

            state.productsHome[category] = state.productsHome[category].map( existingProduct => { 
                if (existingProduct.id !== product.id) {
                    return {
                        ...product
                    }                    
                };
                return existingProduct;
            })                      
        },     
        loadingProductsHome: (state, {payload: {category, data, page}}) => {
            state.paginator = data;
            state.isLoadingHome = false;    
            state[`products${page}`][category] = data.content                 
        },
        loadingProductsCategories: (state, {payload: {category, data, page}}) => {
            state.paginator = data;
            state.isLoadingCategories = false;    
            state[`products${page}`][category] = data.content                 
        },
        loadingProduct: (state, {payload}) => {
            state.isLoadingProduct = false; 
            state.product = payload;              
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        onLoading: (state) => {
            state.isLoadingCategories = true;
            state.isLoadingProduct = true
        }      
    }
});

export const {
    addProduct,
    removeProduct,
    updateProduct,
    loadingProductsHome,
    loadingProductsCategories,
    loadingProduct,
    isLoadingProduct,
    isLoadingCategories,
    isLoadingHome,
    onLoading,
    setErrors
} = productsSlice.actions