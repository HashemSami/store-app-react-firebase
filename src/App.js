import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage.componenet";

function App() {
  return (
    <div>
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
