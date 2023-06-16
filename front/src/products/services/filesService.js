import filesApi from "../../apis/filesApi";
import axios from "axios";

export const getFile = async (fileName) => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/files/${fileName}`);
    } catch (error) {
        throw error;
    }  
}

export const save = async (formData) => { 
    try {
        return await filesApi.post('', formData);
    } catch (error) {
        throw error;
    }  
}
