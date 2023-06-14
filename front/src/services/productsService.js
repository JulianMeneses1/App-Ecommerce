import productsApi from "../apis/productsApi";
import axios from "axios";

export const findAll = async () => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
    } catch (error) {
        throw error;
    }  
}

export const findByCategoryPages = async (page = 0, size = 3) => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/category/${monitores}?page=${page}&size=${size}`);
    } catch (error) {
        throw error;
    }  
}

export const findById = async (id) => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`);
    } catch (error) {
        throw error;
    }  
}

export const save = async ({title, description, image, price, category}) => {
    try {
        return await productsApi.post(BASE_URL, {
            title, 
            description, 
            image,
            price,
            category
        });
    } catch (error) {
        throw error;
    }
       
}
export const update = async ({title, description, image, price, category, id}) => {
    try {
        return await productsApi.put(`''/${id}`, {
            title,
            description,
            image,
            price,
            category
        });
    } catch (error) {
        throw error;
    }
       
}
export const remove = async (id) => {
    try {
        await productsApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }   
}
