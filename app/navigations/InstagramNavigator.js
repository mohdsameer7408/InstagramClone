import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { useSelector } from "react-redux";

import InstagramTabNavigator from "./InstagramTabNavigator";
import AuthStack from "./AuthStack";
import { selectUser } from "../features/authSlice";

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255, 255)",
    card: "rgb(242, 242, 242)",
  },
};

const InstagramNavigator = () => {
  const scheme = useColorScheme();
  const user = useSelector(selectUser);

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? DarkTheme : CustomDefaultTheme}
      >
        <StatusBar style="auto" />
        {user ? <InstagramTabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default InstagramNavigator;
