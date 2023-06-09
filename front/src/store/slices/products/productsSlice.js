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
        isLoading: false,
        paginator: {}
    },
    reducers: {
        addProduct: (state, {payload: {category, product}}) => {
           
            state.productsHome[category] = [
                ...state.productsHome[category], 
                {
                    ...product
                } 
            ] 
            state.isLoading = false;                                 
        },
        removeProduct: (state, {payload: {category, id}}) => {

            state.productsHome[category] = state.productsHome[category].filter(
                (product) => product.id !== id
              ); 
            state.isLoading = false;            
        },
        updateProduct:  (state, {payload: {category, product }}) => {
           
            state.productsHome[category] = state.productsHome[category].map( existingProduct => { 
                if (existingProduct.id == product.id) {
                    return {
                        ...product
                    }                    
                };
                return existingProduct;
            }) 
            state.product = product ; 
            state.isLoading = false;                    
        },     
        loadingProductsHome: (state, {payload: {category, data, page}}) => {
            state.paginator = data;               
            state[`products${page}`][category] = data.content  
            state.isLoading = false;                
        },
        loadingProductsCategories: (state, {payload: {category, data, page}}) => {
            state.paginator = data;              
            state[`products${page}`][category] = data.content
            state.isLoading = false;                   
        },
        loadingProduct: (state, {payload}) => {            
            state.product = payload; 
            state.isLoading = false;              
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        },
        onLoading: (state) => {            
            state.isLoading = true
        },
        finishLoading: (state) => {
            state.isLoading = false
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
    isLoading,
    finishLoading,
    onLoading,
    setErrors
} = productsSlice.actions