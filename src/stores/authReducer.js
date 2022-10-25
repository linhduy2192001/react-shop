const initialValue = {
    user:null
}


export const loginAction = (data) => {
    return async (dispatch) => {
        try{

        }
        catch(err){
            
        }
    }
}
export default function authReducer(state = initialValue,action){
    switch(action.type){
        case 'auth/login':
            return {

            }
        default: return state
    }
}