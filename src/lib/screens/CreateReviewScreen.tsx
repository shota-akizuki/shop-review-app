import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import { IconButton } from "../../components/IconButton";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);
  return (
    <SafeAreaView style={styles.container}>
      <Text>CreateReviewScreen</Text>
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
