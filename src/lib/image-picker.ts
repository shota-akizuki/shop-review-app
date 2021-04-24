import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const getCameraPermision = async () => {
  //カメラロールを使用する許可を求めるダイアログを表示する
  if (Constants.platform.ios) {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== "granted") {
      alert("画像を選択するためにはカメラロールの許可が必要です");
    }
  }
};

export const pickImage = async () => {
  //パーミッションを取得
  await getCameraPermision();
  //ImagePickerを起動
  const result = await ImagePicker.launchImageLibraryAsync({
    //メディアタイプを画像を選択
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //イメージを選択した後、寸法なども編集できる
    allowsEditing: false,
  });
  if (result.cancelled === false) {
    //uriに画像のパスが入る
    return result.uri;
  }
};
