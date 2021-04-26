import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Image, Alert } from "react-native";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";
import { StarInput } from "../../components/StarInput";
import { TextArea } from "../../components/TextArea";
import { createReviewRef, uploadImage } from "../firebase";
import { RootStackParamList } from "../../types/navigation";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import firebase from "firebase";
import { Review } from "../../types/review";
import { View } from "react-native";
import { pickImage } from "../image-picker";
import { getExtension } from "../../utils/file";
import { Loading } from "../../components/Loading";
import { ReviewsContext } from "../../contexts/reviewsContext";

//レビュー投稿用の画面

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUri, setImageUri] = useState<string>("");
  const { user } = useContext(UserContext);
  const { reviews, setReviews } = useContext(ReviewsContext);

  const onSubmit = async () => {
    if (!text || !imageUri) {
      Alert.alert("レビューまたは画像がありません");
      return;
    }
    setLoading(true);
    //document のidを取得
    const reviewDocRef = await createReviewRef(shop.id);
    //strorageのパスを決定
    const ext = getExtension(imageUri);
    const storagePath = `reviews/${reviewDocRef.id}.${ext}`;
    //画像をstorageにアップロード
    const downloadUrl = await uploadImage(imageUri, storagePath);
    //reviewドキュメントを作る
    const review = {
      id: reviewDocRef.id,
      user: { name: user.name, id: user.id },
      shop: { name: shop.name, id: shop.id },
      text: text,
      score: score,
      imageUrl: downloadUrl,
      updatedAt: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now(),
    } as Review;
    await reviewDocRef.set(review);
    //レビュー一覧に即時反映する
    setReviews([review, ...reviews]);
    setLoading(false);
    navigation.goBack();
  };
  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
  };
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
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いてください"
      />
      <View style={styles.photoContainer}>
        <IconButton name="camera" onPress={onPickImage} color="#ccc" />
        {!!imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
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
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});
