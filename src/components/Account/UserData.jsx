import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const UserData = () => {
  const { auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <Text>Bienvenido,</Text>
      <Text
        style={styles.fullName}
      >{`${auth.firstName} ${auth.lastName}`}</Text>
      <View style={{ marginBottom: 20 }}>
        <ItemContainer
          title={"Nombre:"}
          description={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemContainer title={"User:"} description={auth.username} />
        <ItemContainer title={"Favoritos:"} description={"0 Pokémons"} />
      </View>
      <Pressable style={styles.button} onPress={() => dispatch(logout())}>
        <Text style={styles.textButton}>DESCONECTAR</Text>
      </Pressable>
    </View>
  );
};

const ItemContainer = ({ title, description }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemDescription}>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 40,
  },
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginBottom: 10,
  },
  itemName: {
    width: "30%",
    fontWeight: "bold",
    paddingVertical: 8,
  },
  itemDescription: {
    paddingVertical: 8,
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
export { UserData };
