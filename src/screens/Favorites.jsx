import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { getFavoritesFromStorage } from "../utils/asyncStorage";

const Favorites = () => {
  const handleGetFromFavorite = async () =>
    console.log(await getFavoritesFromStorage());
  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title="Obtener" onPress={handleGetFromFavorite} />
    </SafeAreaView>
  );
};

export { Favorites };
