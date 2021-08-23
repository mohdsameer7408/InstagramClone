import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import HeaderTitle from "../components/HeaderTitle";
import InstagramHeaderButton from "../components/InstagramHeaderButton";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
            <Item title="post" iconName="plus-box-outline" />
            <Item title="message" iconName="facebook-messenger" />
          </HeaderButtons>
        ),
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (props) => <HeaderTitle {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
