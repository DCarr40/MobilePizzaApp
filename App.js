import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";
import { createTwoPartAlert } from "./components/onPressFunctions";

export default function App() {
  const createThreePartAlert = () => {
    Alert.prompt("Button has been pressed!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>MobilePizzaApp</Text>
      <Button title="2 Part Alert!" onPress={createTwoPartAlert} />
      <Button title="Let's Get Started" onPress={createThreePartAlert} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
