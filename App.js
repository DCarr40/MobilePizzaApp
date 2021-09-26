import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, Image } from "react-native";
import MyButton from "./components/Buttons/MyButton";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          width: 200,
          height: 300,
          url: "https://picsum.photos/200/300",
        }}
      />
      <Text>MobilePizzaApp</Text>
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
});
