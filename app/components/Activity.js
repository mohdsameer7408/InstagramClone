import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Activity = ({ imageUrl, message }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.activity}>
      <Image
        style={styles.activityImage}
        resizeMode="cover"
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={{ ...styles.activityMessage, color: colors.text }}>
        {message}
      </Text>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  activity: {
    width,
    paddingHorizontal: width * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  activityImage: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: (width * 0.12) / 2,
  },
  activityMessage: {
    width: width * 0.76,
    fontSize: 12,
    fontWeight: "700",
  },
});
