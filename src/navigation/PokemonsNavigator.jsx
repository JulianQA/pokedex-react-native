import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Pokedex } from "../screens/Pokedex";
import { Pokemon } from "../screens/Pokemon";
const Stack = createNativeStackNavigator();

const PokemonsNavigator = () => {
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
        name="Pokemons"
        component={Pokedex}
        options={{
          title: "Pokedex",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default PokemonsNavigator;
