import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ChatMessage = ({ data }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.messageContainer}>
      <View
        style={[
          styles.chatMessage,
          (data === 1 || data === 3) && styles.chatMessageSender,
        ]}
      >
        {data !== 1 && data !== 3 && (
          <Image
            style={styles.messageUserImage}
            resizeMode="cover"
            source={{
              uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
            }}
          />
        )}
        <View
          style={{
            ...styles.messageTextContainer,
            backgroundColor:
              data === 1 || data === 3 ? colors.primary : colors.border,
          }}
        >
          <Text style={{ ...styles.message, color: colors.text }}>
            Hello World!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({
  messageContainer: {
    width: width * 0.95,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  chatMessage: {
    maxWidth: "88%",
    flexDirection: "row",
    alignItems: "center",
  },
  chatMessageSender: {
    alignSelf: "flex-end",
  },
  messageUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  messageTextContainer: {
    marginLeft: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  message: {
    fontSize: 16,
  },
});
