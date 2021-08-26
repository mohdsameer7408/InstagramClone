import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeScreen from "../screens/HomeScreen";
import HeaderTitle from "../components/HeaderTitle";
import InstagramHeaderButton from "../components/InstagramHeaderButton";
import ChatsScreen from "../screens/ChatsScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: (props) => <HeaderTitle {...props} />,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
              <Item title="post" iconName="plus-box-outline" />
              <Item
                title="message"
                iconName="facebook-messenger"
                onPress={() => navigation.navigate("ChatsScreen")}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          headerTitle: "meme_coding",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
              <Item title="video" iconName="video-outline" />
              <Item title="group" iconName="square-edit-outline" />
            </HeaderButtons>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
