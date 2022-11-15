import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokedex } from "../screens/Pokedex";
import { Pokemon } from "../screens/Pokemon";
const Stack = createNativeStackNavigator();

const PokemonsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "Pikachu",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Pokemons"
        component={Pokedex}
        options={{
          title: "Pokedex",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default PokemonsNavigator;
