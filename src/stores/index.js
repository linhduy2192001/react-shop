import {applyMiddleware, combineReducers, createStore } from "redux";
import pageReducer from "./pageReducer";
import thunk from 'redux-thunk'
import authReducer from "./authReducer";
const reducers = combineReducers({
    page:pageReducer,
    auth: authReducer
})
const store = createStore(reducers,applyMiddleware(thunk))

export default store