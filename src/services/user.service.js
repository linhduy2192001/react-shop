import api from "../config/api";

const userService = {
    getUser(){
        return api.get('/user/get-info')
    }
}
export default userService