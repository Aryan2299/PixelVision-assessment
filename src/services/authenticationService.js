import bcrypt from "bcryptjs";
import { User } from "../models/User";

const dummyUser = User("John Doe", "john@example.com", "password");

export const authenticateUser = (userContext, email, password, setRedirect) => {
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
