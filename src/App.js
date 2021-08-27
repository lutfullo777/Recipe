import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./navbar/nav";
import Foods from "./screens/foods";
import Basket from "./screens/basket";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Foods} />
          <Route path="/basket" exact component={Basket} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
