import Constants from "expo-constants";
import firebase from "firebase/app";
import "firebase/firestore";
import { Shop } from "./types/shop";

//Fire baseの初期化がされていないなら初期化する
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("shops")
    .orderBy("score", "desc")
    .get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
