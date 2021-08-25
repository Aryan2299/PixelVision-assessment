import React from "react";

import { UserContext } from "../UserContext";
import { Redirect } from "react-router";
import { authenticateUser } from "../services/authenticationService";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const userContext = React.useContext(UserContext);

  return !redirect ? (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button
        type="button"
        onClick={() =>
          authenticateUser(userContext, email, password, setRedirect)
        }
      >
        Login
      </button>
    </div>
  ) : (
    <Redirect to="/user/dashboard" />
  );
};

export default Login;
