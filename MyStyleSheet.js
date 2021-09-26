import { StyleSheet } from "react-native";

export const MyStyleSheet = () => {
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
      backgroundColor: "#F36A06",
      borderColor: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      borderRadius: 6,
    },
  });
};
