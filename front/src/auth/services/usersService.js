import axios from "axios"

export const save = async(user) => {
    try {
        return axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, user)
    } catch (error) {
        throw error;
    }
}

