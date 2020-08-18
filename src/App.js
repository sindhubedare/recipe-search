import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Instructions from "./Components/Instructions";
import Recipe from "./Content/Recipe";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <nav>
        <ul className="card-panel white-text teal lighten-2">
          <li>
            <Link to="/">Home </Link>{" "}
          </li>
          <li>
            <Link to="/Instructions"> Instructions</Link>
          </li>
          <li>
            <Link to="/Recipe"> Recipe</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/Recipe" component={Recipe} />
        <Route path="/Instructions" component={Instructions} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
