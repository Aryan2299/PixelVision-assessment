import React from "react";

import { UserContext } from "../UserContext";
import { Redirect } from "react-router";
import { authenticateUser } from "../services/authenticationService";
import { formDivStyle, formErrorMessageStyle } from "../styles/loginStyle";

import "../App.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const userContext = React.useContext(UserContext);

  return !redirect ? (
    <div style={formDivStyle}>
      <p style={errorMessage ? formErrorMessageStyle : null}>{errorMessage}</p>
      <h4>Login to contiue</h4>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passowrd"
      />
      <button
        type="button"
        onClick={() =>
          authenticateUser(
            userContext,
            email,
            password,
            setRedirect,
            setErrorMessage
          )
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
