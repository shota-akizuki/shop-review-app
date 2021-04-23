import React, { useEffect, useContext } from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import { signin } from "../firebase";
import { UserContext } from "../../contexts/userContext";

type Props = {};

export const AuthScreen: React.FC<Props> = ({}) => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      setUser(user);
    };
    fetchUser();
  }, []);
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
