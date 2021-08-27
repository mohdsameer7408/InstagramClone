import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const ChatHeaderTitle = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.headerTitleContainer}>
      <Image
        style={styles.userImage}
        resizeMode="cover"
        source={{
          uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
        }}
      />
      <Text style={{ ...styles.userName, color: colors.text }}>John Smith</Text>
    </View>
  );
};

export default ChatHeaderTitle;

const styles = StyleSheet.create({
  headerTitleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  userName: {
    marginLeft: 12,
    fontWeight: "bold",
  },
});
