import { ScrollView } from "react-native";
import React from "react";
import { Header } from "../components/Pokemon/Header";
import { Types } from "../components/Pokemon/Types";
import { Stats } from "../components/Pokemon/Stats";

const Pokemon = ({
  navigation,
  route: {
    params: { pokemon },
  },
}) => {
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export { Pokemon };
