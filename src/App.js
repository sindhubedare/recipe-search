import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Instructions from "./Components/Instructions";
import Recipe from "./Content/Recipe";
import Home from "./Components/Home";
import Feedback from "./Components/Feedback";

function App() {
  return (
    <Router>
      <nav>
        <div className="nav-wrapper blue lighten-1">
          <div className="card-panel teal lighten 2">
            <ul>
              <li>
                <Link to="/">
                  <span className="white-text text-darken-2">Home</span>{" "}
                </Link>{" "}
              </li>
              <li>
                <Link to="/Instructions">
                  <span className="white-text text-darken-2">
                    {" "}
                    Instructions
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Recipe">
                  <span className="white-text text-darken-2"> Recipe</span>
                </Link>
              </li>
              <li>
                <Link to="/Feedback">
                  <span className="white-text text-darken-2"> Feedback</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/Recipe" component={Recipe} />
        <Route exact path="/Instructions" component={Instructions} />
        <Route exact path="/Feedback" component={Feedback} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
