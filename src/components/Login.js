import React from "react";
import { User } from "../models/User";
import { UserContext } from "../UserContext";
import bcrypt from "bcryptjs";
import { Redirect } from "react-router";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);

  const dummyUser = User("John Doe", "john@example.com", "password");
  const userContext = React.useContext(UserContext);

  const authenticateUser = () => {
    dummyUser.then((user) => {
      if (user.email !== email) {
        console.log("Error: Invalid email");
        return;
      }
      bcrypt.hash(password, 10).then(async () => {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          userContext.name = user.name;
          userContext.email = user.email;
          setRedirect(true);
        } else {
          console.log("Error: Incorrect password");
        }
      });
    });
  };

  return !redirect ? (
    <div>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="button" onClick={authenticateUser}>
        Login
      </button>
    </div>
  ) : (
    <Redirect to="/user/dashboard" />
  );
};

export default Login;
