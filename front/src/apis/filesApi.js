import axios from "axios";

const filesApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/files`
});


filesApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization': sessionStorage.getItem('token')
    }
    return config;
})

export default filesApi