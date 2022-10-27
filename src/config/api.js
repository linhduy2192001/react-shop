import axios from "axios";
import { getToken } from "../core/utils/token";

// axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
})

api.interceptors.request.use((config) => { 

    let token = getToken()
    if (token) {
        config.headers.Authorization  = `Bearer ${token.accessToken}`
    }

    return config
})

api.interceptors.response.use((res) => {

    return res.data

}, (err) => {
    /**Kiểm tra có phải lỗi do token hết hạn
     * refreshtoken
     * gọi lại api bị thất bại
     */


    throw err.response.data
})

export default api