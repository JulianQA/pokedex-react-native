import { API_URL } from "../utils/constants";

export const getPokemons = async (nextFetch) => {
  try {
    const url = `${API_URL}pokemon?limit=20&offset=0`;
    const response = await fetch(nextFetch || url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonDetail = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
