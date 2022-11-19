import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const LoginForm = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        autoCapitalize="false"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="false"
        secureTextEntry={true}
      />
      <Pressable style={styles.button} onPress={() => console.log("Entrando")}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 20,
    fontWeight: "bold",
  },
  input: {
    width: "70%",
    alignSelf: "center",
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
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

export { LoginForm };
