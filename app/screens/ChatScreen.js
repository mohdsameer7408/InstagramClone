import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import ChatBottom from "../components/ChatBottom";

import ChatMessage from "../components/ChatMessage";

const { width } = Dimensions.get("window");

const ChatScreen = () => {
  return (
    <View style={styles.chatScreen}>
      <FlatList
        contentContainerStyle={styles.chatMessages}
        data={Array(16).fill()}
        keyExtractor={(_, index) => index.toString()}
        inverted
        renderItem={({ index }) => <ChatMessage data={index} />}
      />
      <ChatBottom />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  chatMessages: {
    width,
    alignItems: "center",
  },
});
