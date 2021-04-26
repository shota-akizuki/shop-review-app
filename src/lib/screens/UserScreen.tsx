import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import firebase from "firebase";
import React, { useContext } from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Loading } from "../../components/Loading";
import { UserContext } from "../../contexts/userContext";
import { updateUser } from "../firebase";
import { RootStackParamList } from "../../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id, { name: name, updatedAt });
    //contextの値を更新する
    //現在のuserの値を展開して、nameとupdatedAtをマージ
    setUser({ ...user, name, updatedAt });
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Form
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        label="名前"
      />
      <Button onPress={onSubmit} text="保存する" />
      <Loading visible={loading} />
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
