import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ChatMessage from "../components/ChatMessage";

const ChatScreen = () => {
  return (
    <View style={styles.chatScreen}>
      <FlatList
        contentContainerStyle={styles.chatMessages}
        data={Array(16).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ index }) => <ChatMessage data={index} />}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatScreen: {
    flex: 1,
  },
  chatMessages: {
    marginTop: 20,
    alignItems: "center",
  },
});
