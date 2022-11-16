import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const PokemonCard = ({ pokemon }) => {
  const handleChangeView = () => {
    console.log(`vamos al pokemon ${pokemon.name}`);
  };

  const typeString = pokemon.types.map((item) => item.type.name).join(", ");
  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={handleChangeView}>
        <View>
          <Text style={styles.nameText}>{pokemon.name}</Text>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.imagePokemon}
          />
          <Text style={styles.nameText}>{typeString}</Text>
          <View style={styles.pokemonOrder}>
            <Text style={{ color: "#fff" }}>{pokemon.order}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 150,
    borderWidth: 2,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    textAlign: "center",
  },
  imagePokemon: {
    width: 90,
    height: 90,
    borderWidth: 2,
  },
  pokemonOrder: {
    position: "absolute",
    top: -25,
    left: -25,
    width: 30,
    height: 30,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
export { PokemonCard };
