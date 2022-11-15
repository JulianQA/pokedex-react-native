import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Account } from "../screens/Account";
import { Favorites } from "../screens/Favorites";
import pokeBallImg from "../assets/pokeball.png";
import PokemonsNavigator from "./PokemonsNavigator";
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          headerTitle: "Favoritos",
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokemonsNavigator}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderImagePokeBall(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: "Mi Cuenta",
          headerTitleAlign: "center",
        }}
      />
    </Tab.Navigator>
  );
};
const renderImagePokeBall = () => (
  <Image source={pokeBallImg} style={{ width: 60, height: 60, top: -15 }} />
);
export { Navigation };
