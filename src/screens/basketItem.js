import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteBasket } from "../redux/actions";

function BasketItem({ recepi }) {
  const dispatch = useDispatch();

  return (
    <div className="food-recipe">
      <h1>{recepi.recipe.label}</h1>
      <img src={recepi.recipe.image} alt="" />
      <p>
        <b>Calories: {recepi.recipe.calories}</b>
      </p>
      <p>
        <b>Recipe:</b>
      </p>
      <ol>
        {recepi.recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <div className="recepi-active">
        <FaTrash size={50} />
        <h2 onClick={() => dispatch(deleteBasket(recepi))}>
          REMOVE FROM BASKET
        </h2>
      </div>
    </div>
  );
}

export default BasketItem;
