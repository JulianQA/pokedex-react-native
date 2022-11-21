import { ScrollView } from "react-native";
import React from "react";
import { Header } from "../components/Pokemon/Header";
import { Types } from "../components/Pokemon/Types";
import { Stats } from "../components/Pokemon/Stats";
import { FavoriteButton } from "../components/Pokemon/FavoriteButton";
import { useSelector } from "react-redux";

const Pokemon = ({
  navigation,
  route: {
    params: { pokemon },
  },
}) => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      {auth && <FavoriteButton pokemon={pokemon} />}
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
};

export { Pokemon };
