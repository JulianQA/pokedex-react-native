import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addFavoriteToStorage,
  deleteFavoritesFromStorage,
  isInFavorite,
} from "../../utils/asyncStorage";

const FavoriteButton = ({ pokemon }) => {
  const [favorite, setFavorite] = useState(false);
  const handleAddToFavorite = async () => {
    await addFavoriteToStorage(pokemon);
    setFavorite(!favorite);
  };
  const handleRemoveFromFavorite = async () => {
    await deleteFavoritesFromStorage(pokemon);
    setFavorite(false);
  };
  useEffect(() => {
    (async () => {
      const response = await isInFavorite(pokemon);
      setFavorite(response);
    })();
  }, [pokemon]);
  return (
    <Icon
      name="heart"
      color={"white"}
      size={20}
      solid={favorite}
      onPress={favorite ? handleRemoveFromFavorite : handleAddToFavorite}
      style={{ position: "absolute", right: 20, top: 260 }}
    />
  );
};

export { FavoriteButton };
