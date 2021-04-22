import * as React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../lib/screens/HomeScreen";
import { ShopScreen } from "../lib/screens/ShopScreen";
import { RootStackParamList } from "../lib/types/navigation";
import { CreateReviewScreen } from "../lib/screens/CreateReviewScreen";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});
