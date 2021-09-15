import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";

import SearchScreen from "../screens/SearchScreen";
import PostsScreen from "../screens/PostsScreen";

const Stack = createStackNavigator();

const SearchStack = () => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: true, headerTitle: "Explore" }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
