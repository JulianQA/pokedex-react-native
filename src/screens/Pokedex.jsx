import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getPokemons } from "../api/getPokemons";

const Pokedex = () => {
  useEffect(() => {
    try {
      const loadPokemons = async () => {
        const response = await getPokemons();
        console.log(response);
      };
      loadPokemons();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export { Pokedex };
