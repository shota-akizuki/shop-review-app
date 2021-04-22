import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

type Props = {};

export const AuthScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>ログイン中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    fontSize: 12,
    color: "#888",
  },
});
