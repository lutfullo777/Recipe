import { ADD_BASKET, ADD_BASKET_ERR, ADD_BASKET_REQ, DEL_BASKET, DEL_BASKET_ERR, DEL_BASKET_REQ, GET_BASKET, GET_BASKET_ERR, GET_BASKET_REQ } from "./actions";




export const addBasketRed = (state={},action) =>{
    switch (action.type) {
        case ADD_BASKET_REQ:
            return{
                ...state,
                loading:true
            };
        case ADD_BASKET:{
            return{
                ...state,
                loading:false,
                basket:action.payload
            }
        }
        case ADD_BASKET_ERR:
            return{
                ...state,
                loading:false,
                err:action.payload
            }
    
        default:
            return state;
    }
    
}
export const getBasketRed = (state={},action) =>{
    switch (action.type) {
        case GET_BASKET_REQ:
            return{
                ...state,
                loading:true
            };
        case GET_BASKET:{
            return{
                ...state,
                loading:false,
                basket:action.payload
            }
        }
        case GET_BASKET_ERR:
            return{
                ...state,
                loading:false,
                err:action.payload
            }
    
        default:
            return state;
    }
    
}


export const delBasketRed = (state={},action) =>{
    switch (action.type) {
        case DEL_BASKET_REQ:
            return{
                ...state,
                loading:true
            };
        case DEL_BASKET:{
            return{
                ...state,
                loading:false,
                basket:action.payload
            }
        }
        case DEL_BASKET_ERR:
            return{
                ...state,
                loading:false,
                err:action.payload
            }
    
        default:
            return state;
    }
    
}