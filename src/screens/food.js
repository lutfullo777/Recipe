import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../redux/actions";

function Food({ recepi }) {
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
        <FaShoppingBasket size={50} />
        <h2 onClick={() => dispatch(addBasket(recepi))}>ADD TO BASKET</h2>
      </div>
    </div>
  );
}

export default Food;
