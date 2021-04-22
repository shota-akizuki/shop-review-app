import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabNavigator } from "./MainTabNavigator";
import { AuthScreen } from "../lib/screens/AuthScreen";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const user = { id: "aaa" };
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
