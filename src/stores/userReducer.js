import { getToken, getUser, setUser } from "../core"
import userService from "../services/user.service"

const initialState = {
    user:getUser()
}

const SET_USER = 'user/setUser'
export const setUserAction = (user) => ({ type: SET_USER, payload:user})

export const getUserInfoAction =  () =>{
    return async (dispatch) => {
        try{
            if (getToken()){
                const user = await userService.getUser()
                setUser(user.data)
    
                dispatch(setUserAction(user.data))
            }

        }catch(err){
            console.error(err)        
        }
    }
}

export default function userReducer (state = initialState, action){
    switch(action.type){
        case  SET_USER:
            return {...state, user: action.payload}
        default: return state
    }
}