import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Text } from "react-native";

import InstagramHeaderButton from "../components/InstagramHeaderButton";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PostsScreen from "../screens/PostsScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "meme_coding",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
              <Item title="post" iconName="plus-box-outline" />
              <Item title="message" iconName="menu" />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerTitle: "Edit Profile",
        }}
      />
      <Stack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={({ route }) => ({
          headerTitle: route.params.tagged ? "Tagged" : "Posts",
          headerRight: () =>
            route.params.tagged && (
              <Text
                style={{
                  color: colors.primary,
                  marginRight: 20,
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Edit
              </Text>
            ),
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
