import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabNavigator } from "./MainTabNavigator";
import { AuthScreen } from "../lib/screens/AuthScreen";
import { UserContext } from "../contexts/userContext";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  //グローバルなuserを取得する
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
