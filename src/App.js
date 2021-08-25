import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { UserContext } from "./UserContext";

function App() {
  return (
    <UserContext.Provider
      value={{
        user: {
          name: null,
          email: null,
        },
      }}
    >
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
