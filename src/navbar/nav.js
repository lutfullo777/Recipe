import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";

function Nav() {
  const linksStyle = {
    color: "white",
    padding: "10px",
    margin: "2px",
    width: "120px",
    alignItem: "center",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
  };

  return (
    <nav>
      <h1>
        <Link style={linksStyle} to="/">
          RECIPE
        </Link>
      </h1>
      <h1>
        <Link style={linksStyle} to="/basket">
          BASKET
          <FaShoppingBasket size="1.3em" />
        </Link>
      </h1>
    </nav>
  );
}

export default Nav;
