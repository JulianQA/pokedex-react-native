import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NeddToBeLogged = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text style={{ marginBottom: 30 }}>
        Necesitas estar Logeado para por ver esta sección
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Account")}
      >
        <Text style={styles.textButton}>Ir al Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "70%",
    alignSelf: "center",
    backgroundColor: "#ee1515",
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#f0f0f0",
    letterSpacing: 1,
  },
});

export { NeddToBeLogged };
