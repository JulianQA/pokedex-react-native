import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { LoginForm } from "../components/Account/LoginForm";
import { UserData } from "../components/Account/UserData";

const Account = () => {
  const isAuth = useSelector((state) => state.auth);
  return <View>{isAuth ? <UserData /> : <LoginForm />}</View>;
};

export { Account };
