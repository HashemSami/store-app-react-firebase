import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/hats">
          <HatsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
