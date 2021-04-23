import { createContext } from "react";
import { User } from "../lib/types/user";

type UserContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});
