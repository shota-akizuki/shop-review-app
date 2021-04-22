import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
/**types */
import { Shop } from "../lib/types/shop";
import { Stars } from "./Stars";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

type Props = {
  shop: Shop;
  onPress: () => void;
};

export const ShopReviewItem: React.FC<Props> = ({ shop, onPress }: Props) => {
  const { name, imageUrl, place, score } = shop;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image}></Image>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.placeText}>{place}</Text>
      <Stars score={score} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.7,
  },
  nameText: {
    fontSize: 16,
    color: "#111",
    marginTop: 8,
    fontWeight: "bold",
  },
  placeText: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  },
});
