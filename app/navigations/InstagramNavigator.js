import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import InstagramTabNavigator from "./InstagramTabNavigator";
import AuthStack from "./AuthStack";

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

  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={scheme === "dark" ? DarkTheme : CustomDefaultTheme}
      >
        <StatusBar style="auto" />
        {false ? <AuthStack /> : <InstagramTabNavigator />}
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default InstagramNavigator;
