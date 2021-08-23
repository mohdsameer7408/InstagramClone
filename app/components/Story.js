import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Story = ({ add }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.story}>
      <TouchableOpacity
        style={{ ...styles.imageContainer, borderWidth: add ? 0 : 2 }}
        onPress={() => {}}
      >
        <Image
          source={{
            uri: add
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU"
              : "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
          }}
          resizeMode="cover"
          style={styles.storyImage}
        />
        {add && (
          <Ionicons
            name="add-circle"
            size={20}
            color="#2e98e8"
            style={styles.addIcon}
          />
        )}
      </TouchableOpacity>
      <Text style={{ ...styles.userName, color: colors.text }}>
        {add ? "Your Story" : "meme_coding".slice(0, 10)}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fb3958",
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  addIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  userName: {
    fontSize: 12,
    marginTop: 4,
  },
});
