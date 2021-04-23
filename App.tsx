import React, { useState } from "react";
import { User } from "./src/lib/types/user";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { UserContext } from "./src/contexts/userContext";

export default function App() {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
