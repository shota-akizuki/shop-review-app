import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../lib/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { UserScreen } from "../lib/screens/UserScreen";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator<RootStackParamList>();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: "#900", inactiveTintColor: "#999" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
