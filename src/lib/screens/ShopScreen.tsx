import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { ShopDetail } from "../../components/ShopDetail";
import { FloatingActionButton } from "../../components/FloatingActionButton";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: shop.name });
  }, [shop]);
  return (
    <SafeAreaView style={styles.container}>
      <ShopDetail shop={shop} />
      <FloatingActionButton
        onPress={() => navigation.navigate("CreateReview", { shop })}
        iconName="plus"
      />
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
