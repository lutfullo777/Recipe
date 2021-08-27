export const ADD_BASKET_REQ = "ADD_BASKET_REQ";
export const ADD_BASKET = "ADD_BASKET";
export const ADD_BASKET_ERR = "ADD_BASKET_SUC";
export const GET_BASKET_REQ = "GET_BASKET_REQ";
export const GET_BASKET = "GET_BASKET";
export const GET_BASKET_ERR = "GET_BASKET_ERR";
export const DEL_BASKET_REQ = "DEL_BASKET_REQ";
export const DEL_BASKET = "DEL_BASKET";
export const DEL_BASKET_ERR = "DEL_BASKET_ERR";

export const addBasket = (recipe) => async (dispatch) => {
  dispatch({ type: ADD_BASKET_REQ });
  try {
    let basket;
    if (await localStorage.getItem("basket")) {
      basket = JSON.parse(await localStorage.getItem("basket"));
    } else {
      basket = [];
    }
    const filtered = basket.filter(el=>el.recipe.calories===recipe.recipe.calories)
    if(filtered.length===0){
      basket.push(recipe);
    }
    await localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({ type: ADD_BASKET, payload: basket });
  } catch (err) {
    dispatch({ type: ADD_BASKET_ERR, payload: err });
  }
};


export const getBasket = () => async (dispatch) => {
  dispatch({ type: GET_BASKET_REQ });
  try {
    let basket;
    if (await localStorage.getItem("basket")) {
      basket = JSON.parse(await localStorage.getItem("basket"));
    } else {
      basket = [];
    }
    dispatch({ type: GET_BASKET, payload: basket });
  } catch (err) {
    dispatch({ type: GET_BASKET_ERR, payload: err });
  }
};


export const deleteBasket = (recipe) => async (dispatch) => {
  dispatch({ type: DEL_BASKET_REQ });
  try {
    let basket;
    if (await localStorage.getItem("basket")) {
      basket = JSON.parse(await localStorage.getItem("basket"));
    } else {
      basket = [];
    }
    const filtered = basket.filter(el=>el.recipe.calories!==recipe.recipe.calories)
    await localStorage.setItem('basket',JSON.stringify(filtered))
    dispatch({ type: DEL_BASKET, payload: filtered });
    dispatch(getBasket())
  } catch (err) {
    dispatch({ type: DEL_BASKET_ERR, payload: err });
  }
};
