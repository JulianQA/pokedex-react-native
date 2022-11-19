import React from "react";
import { View, Text } from "react-native";
import { LoginForm } from "../components/Account/LoginForm";
import { UserData } from "../components/Account/UserData";

const Account = () => {
  const isAuth = false;
  return <View>{isAuth ? <UserData /> : <LoginForm />}</View>;
};

export { Account };
