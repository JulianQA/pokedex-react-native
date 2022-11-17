import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonDetail, getPokemons } from "../api/getPokemons";
import { PokemonList } from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextFetch, setNextFetch] = useState(null);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemons(nextFetch);
      setNextFetch(response.next);
      const pokemonsDetail = await Promise.all(
        response.results.map((pokemon) => getPokemonDetail(pokemon.url))
      );
      setPokemons([...pokemons, ...pokemonsDetail]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextFetch}
      />
    </SafeAreaView>
  );
};

export { Pokedex };
