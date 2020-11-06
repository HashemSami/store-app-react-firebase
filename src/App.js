import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.componenet";
import Header from "./components/header/Header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
