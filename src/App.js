import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.componenet";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUpPage.component";
import Header from "./components/header/Header.component";

import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // make an effect that will be terigered when the auth changes
  // this way we can check the authed user to our firebase
  useEffect(() => {
    // this is a firebase auth method that can listen to auth state changes
    // and will fire up  every time the auth changes
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(currentUser);
    });
    // we want to clean this method every time this component unmouted
    return () => unsubscribeFromAuth();
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/shop">
          <ShopPage />
        </Route>

        <Route exact path="/signIn">
          <SignInAndSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
