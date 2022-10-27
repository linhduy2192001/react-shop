import { getUser, setToken, setUser } from "../core"
import authService from "../services/auth.service"
import userService from "../services/user.service"
import { getUserInfoAction, setUserAction } from "./userReducer"

const initialValue = {
    user:getUser()
}


export const loginAction = (data) => {
    return async (dispatch) => {
        try{
            const token = await authService.login(data.form)
            setToken(token.data)

            dispatch(getUserInfoAction())

            // const user = await  userService.getUser()
            // setUser(user.data)

            // // dispatch({type: 'auth/login' , payload: user.data})
            // dispatch(setUserAction(user.data))
        }
        catch(err){
            data.error(err)
        }
    }
}
export const registerAction = (data) => {
    return async (dispatch) => {
        try{
            await authService.register(data.form)
            // setToken(token.data)
            dispatch(loginAction({
                form:data.form,
                success: data.success,
                error: data.error
            }))
        }
        catch(err){
            data.error(err)
        }
    }
}

export default function authReducer(state = initialValue,action){
    switch(action.type){
        case 'auth/login':
            return {
                ...state,
                user: action.payload    
            }
        default: return state
    }
}