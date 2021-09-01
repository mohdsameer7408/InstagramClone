import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
