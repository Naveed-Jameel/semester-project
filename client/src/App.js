import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Content1 from "./components/content/content1";
import TopMenue from "./components/navbar/topmenu";
import Products from "./components/products/products";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Login from "./components/login/Login";
import Register from "./components/register/register";
import BuyerPage from "./components/order/buyerPage";
import { Notfound } from "./components/Notfound";

function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Router>
        <TopMenue />

        <Switch>
          <Route exact path="/" component={Content1} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/order/buyerpage" component={BuyerPage} />
          <Route path="/notfound" component={Notfound} />
          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
