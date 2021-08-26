import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import Activity from "../components/Activity";

const { width } = Dimensions.get("window");

const ActivityScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.activityScreen}>
      <Text style={{ ...styles.timeTitle, color: colors.text }}>Today</Text>
      <Activity
        imageUrl="https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum!"
      />
      <Text style={{ ...styles.timeTitle, color: colors.text }}>
        This Month
      </Text>
      {Array(10)
        .fill()
        .map((_, index) => (
          <Activity
            key={index}
            imageUrl="https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg"
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eum!"
          />
        ))}
    </ScrollView>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  activityScreen: {
    paddingVertical: 10,
  },
  timeTitle: {
    marginLeft: width * 0.03,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
});
