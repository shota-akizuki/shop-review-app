import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { ShopDetail } from "../../components/ShopDetail";
import { FloatingActionButton } from "../../components/FloatingActionButton";
import { Review } from "../types/review";
import { getReviews } from "../firebase";
import { ReviewItem } from "../../components/ReviewItem";
import { FlatList } from "react-native";
import { ReviewsContext } from "../../contexts/reviewsContext";
import { useContext } from "react";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  const { reviews, setReviews } = useContext(ReviewsContext);

  useEffect(() => {
    navigation.setOptions({ title: shop.name });
    const fetchReviews = async () => {
      const reviews = await getReviews(shop.id);
      setReviews(reviews);
    };
    fetchReviews();
  }, [shop]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews}
        renderItem={({ item }: { item: Review }) => (
          <ReviewItem review={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
