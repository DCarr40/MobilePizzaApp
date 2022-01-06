import React from "react";
import { Alert, Image, TouchableOpacity } from "react-native";

export const HomePizzaImg = () => {
  const handleImagePress = () => {
    Alert.alert("Mobile Pizza App Image has been pressed", "", [
      {
        text: "Pizza",
        onPress: () => console.log("You want the Pizza!"),
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleImagePress();
      }}
    >
      <Image
        source={{
          width: 200,
          height: 300,
          url: "https://media.istockphoto.com/photos/pep-saus-pizz-picture-id1324333195?b=1&k=20&m=1324333195&s=170667a&w=0&h=5_8XAcLnOIiBKnSzYuwsPgf5AmqDE8V-C2Tfzx3EJfA=",
        }}
      />
    </TouchableOpacity>
  );
};
