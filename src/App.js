import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./user/pages/Users";
import Newplace from "./places/pages/Newplace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <Newplace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
