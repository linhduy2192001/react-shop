import axios from "axios";
import { getToken, setToken } from "../core/utils/token";
import authService from "../services/auth.service";

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

let promiseRefreshToken =  null

api.interceptors.response.use((res) => {

    return res.data

}, async (err) => {

    const response = err.response.data
    
    /**Kiểm tra có phải lỗi do token hết hạn
     * refreshtoken
     * gọi lại api bị thất bại
     */
    if (response.error_code === 'TOKEN_EXPIRED'){
        if (!promiseRefreshToken){
            const token = getToken()
            promiseRefreshToken =  authService.refreshToken({refreshToken: token.refreshToken })
            const accessToken = await promiseRefreshToken
            token.accessToken = accessToken.data.accessToken
            setToken(token)
        }else {
            await promiseRefreshToken
        }
        promiseRefreshToken = null
        return api(err.config)
    }

    throw response
})

export default api