import axios from "axios";

// axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST
})

api.interceptors.request.use((config) => {

    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        config.headers.Authorization  = `Bearer ${token.accessToken}`
    }

    return config
})

api.interceptors.response.use((res) => {

    return res.data

}, (err) => {
    throw err.response.data
})

export default api