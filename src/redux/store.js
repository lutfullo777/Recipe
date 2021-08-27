import {combineReducers, createStore, applyMiddleware} from 'redux'
import {addBasketRed,getBasketRed,delBasketRed} from './reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({addBasketRed,getBasketRed,delBasketRed});




export const store = createStore(rootReducer, applyMiddleware(thunk));