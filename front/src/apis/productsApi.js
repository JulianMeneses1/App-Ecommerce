import axios from "axios";

const productsApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/products`
});


productsApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default productsApi