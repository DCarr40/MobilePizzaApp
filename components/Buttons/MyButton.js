import React from "react";
import { Alert, Button } from "react-native";

export default function MyButton() {
  const TwoButtonAlert = () => {
    Alert.alert("This is a Cool Alert 2 Part Alert", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => console.log("Ok Pressed"),
      },
    ]);
  };

  return (
    <Button
      title="2-Button Alert"
      onPress={() => {
        TwoButtonAlert();
      }}
    />
  );
}
