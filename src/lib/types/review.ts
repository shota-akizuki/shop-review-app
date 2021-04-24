import firebase from "firebase/app";

//レビューの一覧にユーザ名をのせる時などに使う
type UserRef = {
  id: string;
  name: string;
};
//ユーザーのマイページにどのレビューを書いたかの一覧を表示する時などに便利
type ShopRef = {
  id: string;
  name: string;
};

export type Review = {
  id?: string;
  text: string;
  score: number;
  imageUrl: string;
  user: UserRef;
  shop: ShopRef;
  updatedAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};
