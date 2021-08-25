import bcrypt from "bcryptjs";
import { User } from "../models/User";

const dummyUser = User("John Doe", "john@example.com", "password");

export const authenticateUser = (
  userContext,
  email,
  password,
  setRedirect,
  setErrorMessage
) => {
  dummyUser.then((user) => {
    if (user.email !== email) {
      setErrorMessage("Invalid email/password. Please try again.");
      setRedirect(false);
      console.log("Error: Invalid email");
    } else {
      bcrypt.hash(password, 10).then(async () => {
        let match = await bcrypt.compare(password, user.password);
        if (match) {
          userContext.user.name = user.name;
          userContext.user.email = user.email;
          setRedirect(true);
          return true;
        } else {
          setErrorMessage("Invalid email/password. Please try again.");
          setRedirect(false);
          console.log("Error: Incorrect password");
          return false;
        }
      });
    }
  });
};
