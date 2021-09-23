import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Text, TouchableOpacity } from "react-native";

import InstagramHeaderButton from "../components/InstagramHeaderButton";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PostsScreen from "../screens/PostsScreen";
import CreatePostScreen from "../screens/CreatePostScreen";

const Stack = createStackNavigator();

const ProfileStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerBackTitleVisible: false,
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: "meme_coding",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={InstagramHeaderButton}>
              <Item
                title="post"
                iconName="plus-box-outline"
                onPress={() => navigation.navigate("CreatePostScreen")}
              />
              <Item title="message" iconName="menu" />
            </HeaderButtons>
          ),
        })}
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
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: 20,
                }}
              >
                <Text
                  style={{
                    color: colors.primary,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            ),
        })}
      />
      <Stack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{ headerTitle: "New Post" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
