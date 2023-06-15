import { createSlice } from "@reduxjs/toolkit";

export const initialErrors = {
    title: ''
}

export const initialProducts = [
    {notebooks: []},
    {monitores: []},
    {pcs: []},
    {placasDeVideo: []},
    {microprocesadores: []}
]

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: initialProducts,      
        errors: initialErrors,  
        isLoading: true,
        paginator: {}
    },
    reducers: {
        addProduct: (state, {payload: {category, product}}) => {

            const updatedState = state.products.map((categoryObj) => {
                if (Object.keys(categoryObj)[0] === category) {
                    return {
                       [category]: [...categoryObj[category], { ...product }]
                    }               
                }
                return categoryObj;
            });
            state.products = updatedState;
        },
        removeProduct: (state, {payload: {category, id}}) => {

            const updatedState = state.products.map((categoryObj) => {
                if (Object.keys(categoryObj)[0] === category) {
                    const updatedCategory = categoryObj[category].filter(
                    (product) => product.id !== id
                    );
                    return {
                    [category]: updatedCategory,
                    };
                }
                return categoryObj;
                });              
                state.products = updatedState;
        },
        updateProduct:  (state, {payload: {category, product }}) => {

            const updatedState = state.products.map(categoryObj => {
                if (Object.keys(categoryObj)[0] === category) {
                    const updatedCategory = categoryObj[category].map (existingProduct => {
                        if(existingProduct.id === product.id) {
                            return { ...product }
                        }
                        return existingProduct;
                    });
                    return {
                        [category]: updatedCategory
                    };
                }
                return categoryObj;
            });

            state.products = updatedState;
        },     
        loadingProductsByCategory: (state, {payload: {category, data}}) => {
            state.paginator = data;
            state.isLoading = false;          

            const updatedState = state.products.map(categoryObj => {
                if (categoryObj && Object.keys(categoryObj)[0] === category) {                
                    return {
                        [category]: data.content
                    };
                }
                return categoryObj;
            });
            state.products = updatedState;         
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
    loadingProductsByCategory,
    isLoading,
    setErrors
} = productsSlice.actions