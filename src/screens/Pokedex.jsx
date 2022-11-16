import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemonDetail, getPokemons } from "../api/getPokemons";
import { PokemonList } from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    try {
      const loadPokemons = async () => {
        const response = await getPokemons();
        const pokemonsDetail = await Promise.all(
          response.results.map((pokemon) => getPokemonDetail(pokemon.url))
        );
        setPokemons(pokemonsDetail);
      };
      loadPokemons();
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(pokemons);
  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export { Pokedex };
