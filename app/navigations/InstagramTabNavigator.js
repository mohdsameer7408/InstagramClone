import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ChatHeaderButton from "../components/ChatHeaderButton";

const Tab = createBottomTabNavigator();

const InstagramTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: colors.background },
        tabBarStyle: {
          backgroundColor: colors.background,
          height: 60,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabel: "",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "";

          if (route.name === "HomeStack") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "SearchScreen") {
            iconName = "search";
          } else if (route.name === "ReelsScreen") {
            return (
              <MaterialCommunityIcons
                name={focused ? "play-box" : "play-box-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "ActivityScreen") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "ProfileStack") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
          headerShown: true,
          headerTitle: "Reels",
          headerTransparent: true,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ChatHeaderButton}>
              <Item title="camera" iconName="camera-outline" />
            </HeaderButtons>
          ),
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          headerShown: true,
          headerTitle: "Activity",
        }}
      />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default InstagramTabNavigator;
