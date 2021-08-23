import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ActivityScreen from "../screens/ActivityScreen";

const Tab = createBottomTabNavigator();

const InstagramTabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
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
      <Tab.Screen name="ReelsScreen" component={ReelsScreen} />
      <Tab.Screen name="ActivityScreen" component={ActivityScreen} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default InstagramTabNavigator;
