import { getToken } from "../core"
import cartService from "../services/cart.service"

const initialState = {
    cart :null
}
const SET_CART= 'cart/setCart'

export const  getCartAction = () => {
    return async (dispatch) => {
        try{
            if (getToken()){
                const cart = await cartService.getCart()
                dispatch({type: SET_CART, payload: cart.data})
            }
        }catch(err){

        }
    }
}

// export const addCartAction = (data) => {
//     return async (dispatch) => {
//         try {
//             const res = await cartService.addProduct(data.id)
//             if (res.updateCount) {
//                 dispatch(getCartAction())
//               data?.success();
//             } 
//         }catch (err){
//             data?.error(err);
//         }finally {
//             data?.finally()
//          }
//     }
// }

export const removeCartAction = (data) => {
 return async (dispatch) => {
   try {
     const res = await cartService.addProduct(data.id);
     if (res.updateCount) {
       dispatch(getCartAction());
       data?.success();
     }
   } catch (err) {
     data?.error(err);
   } finally {
     data?.finally();
   }
 };
}
export const updateQuantityCartAction = (data) => {
 return async (dispatch) => {
   try {
     const res = await cartService.addProduct(data.id);
     if (res.updateCount) {
       dispatch(getCartAction());
       data?.success();
     }
   } catch (err) {
     data?.error(err);
   } finally {
     data?.finally();
   }
 };
};



export default function cartReducer( state = initialState, action) {
    switch (action.type){
        case SET_CART:{
            return {
                ...state,
                cart:action.payload
            }
        }
        default: return state
    }
}