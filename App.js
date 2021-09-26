import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MyButton from "./components/Buttons/MyButton";
import { HomePizzaImg } from "./components/Buttons/HomePizzaImg";
import MyStyleSheet from "./MyStyleSheet";

export default function App() {
  return (
    <SafeAreaView>
      <HomePizzaImg />
      <Text style={styles.title}>MobilePizzaApp</Text>
      <MyButton />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
