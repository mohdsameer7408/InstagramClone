import { Feather, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Reel = () => {
  const { colors } = useTheme();

  return (
    <ImageBackground
      style={styles.reelContaienr}
      resizeMode="cover"
      source={{
        uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
      }}
    >
      <View style={styles.reelWrapper}>
        <View style={styles.footer}>
          <View style={styles.reelDetails}>
            <View style={styles.reelUserData}>
              <Image
                style={styles.userImage}
                resizeMode="cover"
                source={{
                  uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
                }}
              />
              <Text style={{ ...styles.userName, color: colors.text }}>
                meme_coding . Follow
              </Text>
            </View>
            <Text style={{ ...styles.reelDescription, color: colors.text }}>
              Lorem ipsum dolor sit amet ...more
            </Text>
          </View>
          <View style={styles.actionButtons}>
            <View style={styles.actionButton}>
              <Ionicons
                name="heart-outline"
                size={29}
                color={colors.text}
                style={styles.postHandlerIcon}
              />
              <Text style={{ ...styles.buttonText, color: colors.text }}>
                3389
              </Text>
            </View>
            <View style={styles.actionButton}>
              <Ionicons
                name="chatbubble-outline"
                size={29}
                color={colors.text}
                style={styles.postHandlerIcon}
              />

              <Text style={{ ...styles.buttonText, color: colors.text }}>
                48
              </Text>
            </View>
            <View style={styles.actionButton}>
              <Feather
                name="send"
                size={26}
                color={colors.text}
                style={styles.postHandlerIcon}
              />
            </View>
            <View style={styles.actionButton}>
              <Ionicons
                name="ellipsis-vertical"
                size={22}
                color={colors.text}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Reel;

const styles = StyleSheet.create({
  reelContaienr: {
    width,
    height: height * 0.925,
  },
  reelWrapper: {
    width,
    height: height * 0.925,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  reelDetails: {
    flex: 1,
    padding: 20,
  },
  reelUserData: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
  },
  userName: {
    fontWeight: "bold",
  },
  reelDescription: {
    fontSize: 12,
  },
  actionButtons: {
    height: "100%",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  actionButton: {
    marginBottom: 10,
    alignItems: "center",
  },
  postHandlerIcon: {
    marginBottom: 4,
  },
  buttonText: {
    fontSize: 12,
  },
});
