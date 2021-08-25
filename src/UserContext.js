import { createContext } from "react";

const UserContext = createContext({ user: { email: null, name: null } });

export { UserContext };
