import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { UserContext } from "./UserContext";

function App() {
  // const userContext = React.useContext(UserContext);

  return (
    <UserContext.Provider value={{ user: { email: null, name: null } }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
