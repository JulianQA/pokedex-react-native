import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { getColorByType } from "../utils/colorPokemonsByType";

const PokemonCard = ({ pokemon }) => {
  const handleChangeView = () => {
    console.log(`vamos al pokemon ${pokemon.name}`);
  };

  const typeString = pokemon.types.map((item) => item.type.name).join(", ");
  const listOfTypes = typeString.split(", ");

  const backgroundColor = {
    backgroundColor: getColorByType(listOfTypes[0]),
    ...styles.cardContainer,
  };

  return (
    <View style={backgroundColor}>
      <Pressable onPress={handleChangeView}>
        <View>
          <Text style={styles.nameText}>{pokemon.name}</Text>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.imagePokemon}
          />
          <Text style={styles.nameText}>{typeString}</Text>
          <View style={styles.pokemonOrder}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {pokemon.order}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 150,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  nameText: {
    textAlign: "center",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  imagePokemon: {
    width: 90,
    height: 90,
  },
  pokemonOrder: {
    position: "absolute",
    top: -25,
    left: -25,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f71b1b",
  },
});
export { PokemonCard };
