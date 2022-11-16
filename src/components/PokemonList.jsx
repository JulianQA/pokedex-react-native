import { FlatList, StyleSheet, Text } from "react-native";
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export { PokemonList };
