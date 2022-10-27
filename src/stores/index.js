import {applyMiddleware, combineReducers, createStore } from "redux";
import pageReducer from "./pageReducer";
import thunk from 'redux-thunk'
import authReducer from "./authReducer";
import userReducer, { getUserInfoAction } from "./userReducer";
const reducers = combineReducers({
    page:pageReducer,
    auth: authReducer,
    user: userReducer
})
const store = createStore(reducers,applyMiddleware(thunk))
store.dispatch(getUserInfoAction())

export default store