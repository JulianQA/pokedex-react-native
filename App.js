import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
}
