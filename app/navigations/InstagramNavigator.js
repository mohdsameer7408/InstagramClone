import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import InstagramTabNavigator from "./InstagramTabNavigator";

const InstagramNavigator = () => {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />
        <InstagramTabNavigator />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default InstagramNavigator;
