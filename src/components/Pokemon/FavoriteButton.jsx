import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const FavoriteButton = ({ pokemon }) => {
  const handleAddToFavorite = () => console.log("Favoritos", pokemon.id);
  return (
    <Icon
      name="heart"
      color={"white"}
      size={20}
      onPress={handleAddToFavorite}
      style={{ position: "absolute", right: 20, top: 260 }}
    />
  );
};

export { FavoriteButton };
