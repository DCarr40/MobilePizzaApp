import { Alert } from "react-native";

export const createTwoPartAlert = () => {
  Alert.alert("This is a Cool Alert 2 Part Alert", [
    {
      text: "Cancel",
      onPress: () => alert("Cancel"),
      style: "cancel",
    },
    {
      text: "Vibration Test",
      onPress: () => Vibration.vibrate(),
      style: "cancel",
    },
  ]);
};
