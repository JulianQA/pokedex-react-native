import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    validateOnChange: false,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        autoCapitalize="false"
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="false"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </Pressable>

      <Text style={styles.textError}>
        {formik.errors.username || formik.errors.password}
      </Text>
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
  textError: {
    textAlign: "center",
    color: "#ee1515",
    marginTop: 10,
  },
});

export { LoginForm };
