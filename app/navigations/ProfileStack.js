import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProfileScreen from "../screens/ProfileScreen";
import InstagramHeaderButton from "../components/InstagramHeaderButton";

const Stack = createStackNavigator();

const ProfileStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
            <Item title="post" iconName="plus-box-outline" />
            <Item title="message" iconName="menu" />
          </HeaderButtons>
        ),
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "meme_coding" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
