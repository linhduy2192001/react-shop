import api from "../config/api";

const userService = {
    getUser(){
        return api.get('/user/get-info')
    },
    updateInfo(data){
        return api.post('/user/update',data)
    }
}
export default userService