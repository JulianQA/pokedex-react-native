import AsyncStorage from "@react-native-async-storage/async-storage";

export const addFavoriteToStorage = async (pokemon) => {
  try {
    const favoritesArray = await getFavoritesFromStorage();
    if (!favoritesArray.some((item) => item.id === pokemon.id)) {
      favoritesArray.push(pokemon);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  } catch (error) {
    console.log(error);
  }
};

export const getFavoritesFromStorage = async () => {
  try {
    const response = await AsyncStorage.getItem("favorites");
    return JSON.parse(response || "[]");
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoritesFromStorage = async (pokemon) => {
  try {
    const response = await getFavoritesFromStorage();
    const newArray = response.filter((item) => item.id !== pokemon.id);
    await AsyncStorage.setItem("favorites", JSON.stringify(newArray));
  } catch (error) {
    console.log(error);
  }
};

export const isInFavorite = async (pokemon) => {
  try {
    const list = await getFavoritesFromStorage();
    return list.some((item) => item.id === pokemon.id);
  } catch (error) {
    console.log(error);
  }
};
