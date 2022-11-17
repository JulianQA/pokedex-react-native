import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {
  const loadMorePokemons = () => {
    loadPokemons();
  };
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.order)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.contentContainer}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={2}
      ListFooterComponent={
        isNext && <ActivityIndicator size={"large"} style={styles.spinner} />
      }
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
  spinner: {
    marginTop: 20,
    marginBottom: 40,
  },
});
export { PokemonList };
