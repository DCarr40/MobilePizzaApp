import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import MyButton from "./components/Buttons/MyButton";
import { HomePizzaImg } from "./components/Buttons/HomePizzaImg";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MobilePizzaApp</Text>
      <HomePizzaImg />
      <MyButton />
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

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#F36A06",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
