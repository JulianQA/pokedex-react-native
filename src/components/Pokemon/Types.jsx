import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { getColorByType } from "../../utils/colorPokemonsByType";

const Types = ({ types }) => {
  return (
    <View style={styles.typesContainer}>
      {types.map((item) => (
        <View
          key={item.type.url}
          style={{
            ...styles.typeContainer,
            backgroundColor: getColorByType(item.type.name),
          }}
        >
          <Text style={styles.typeText}>{item.type.name}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  typeContainer: {
    width: 80,
    margin: 8,
    padding: 8,
    borderRadius: 20,
  },
  typeText: {
    textTransform: "capitalize",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
export { Types };
