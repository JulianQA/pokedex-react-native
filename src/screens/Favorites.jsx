import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import { PokemonList } from "../components/PokemonList";
import { getFavoritesFromStorage } from "../utils/asyncStorage";

const Favorites = () => {
  const { auth } = useSelector((state) => state.auth);
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getFavoritesFromStorage();
      setPokemons(response);
    })();
  }, [pokemons]);
  return (
    <SafeAreaView>
      {auth ? (
        <PokemonList pokemons={pokemons} />
      ) : (
        <Text>Necesitas hacer Log in</Text>
      )}
    </SafeAreaView>
  );
};

export { Favorites };
