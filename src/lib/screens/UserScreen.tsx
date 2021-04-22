import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>UserScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
