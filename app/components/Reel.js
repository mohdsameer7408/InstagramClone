import React, { useEffect, useRef, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Video } from "expo-av";
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Reel = () => {
  const { colors } = useTheme();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (videoRef) {
      if (!isFocused) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
    }
  }, [isFocused, videoRef]);

  const toggleReel = (action) => {
    if (action === "pause") {
      videoRef.current.pauseAsync();
      setIsMuted((prevState) => !prevState);
    } else {
      videoRef.current.playAsync();
      setIsMuted((prevState) => !prevState);
    }
  };

  return (
    <View style={styles.reelContainer}>
      <Video
        ref={videoRef}
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        style={styles.video}
        resizeMode="cover"
        isLooping
        isMuted={isMuted}
      />
      <Pressable
        style={styles.reelWrapper}
        onLongPress={() => toggleReel("pause")}
        onPressOut={() => toggleReel("play")}
      >
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
      </Pressable>
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({
  reelContainer: {
    width,
    height: height - StatusBar.currentHeight - 60,
  },
  video: {
    width,
    height: height - StatusBar.currentHeight - 60,
  },
  reelWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: height - StatusBar.currentHeight - 60,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
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
