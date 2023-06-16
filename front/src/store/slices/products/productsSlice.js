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

            const addProductByPage = (page) => {
                state[page][category] = [
                    ...state[page][category], 
                    {
                        ...product
                    } 
                ];
            };            
            addProductByPage(productsHome);
            addProductByPage(productsCategories);          
        },
        removeProduct: (state, {payload: {category, id}}) => {

            const removeProductByPage = (page) => {
                state[page][category] = state[page][category].filter(
                (product) => product.id !== id
              );
            }
            removeProductByPage(productsHome);
            removeProductByPage(productsCategories);
        },
        updateProduct:  (state, {payload: {category, product }}) => {

            const updateProductByPage = (page) => {
                state[page][category] = state[page][category].map( existingProduct => { 
                    if (existingProduct.id !== product.id) {
                        return {
                            ...product
                        }                    
                    };
                    return existingProduct;
                })
            }
            updateProductByPage(productsHome);
            updateProductByPage(productsCategories)            
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
    setErrors
} = productsSlice.actions