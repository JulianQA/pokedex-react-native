import { View, Text, Platform, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getColorByType } from "../../utils/colorPokemonsByType";

const Header = ({ name, order, image, type }) => {
  const mainBackground = {
    backgroundColor: getColorByType(type),
    ...styles.mainContainer,
  };
  return (
    <SafeAreaView style={mainBackground}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        #{`${order}`.padStart(4, 0)}
      </Text>
      <Image source={{ uri: image }} style={styles.image} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 300,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  nameText: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "white",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  colorText: {
    color: "white",
  },
});
export { Header };
