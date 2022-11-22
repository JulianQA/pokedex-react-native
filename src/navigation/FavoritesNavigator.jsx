import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Favorites } from "../screens/Favorites";
import { Pokemon } from "../screens/Pokemon";
const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="arrow-left"
            size={20}
            style={{
              color: "white",
            }}
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Stack.Screen
        name="Favorite"
        component={Favorites}
        options={{ title: "Favorites", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export { FavoritesNavigator };
