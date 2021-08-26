import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Chat from "../components/Chat";
import Search from "../components/Search";

const ChatsScreen = () => {
  return (
    <FlatList
      contentContainerStyle={styles.chatsSCreen}
      data={Array(10).fill()}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ index }) =>
        index === 0 ? (
          <Search style={styles.searchContainer} placeholder="Search" />
        ) : (
          <Chat />
        )
      }
    />
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  chatsSCreen: {
    alignItems: "center",
  },
  searchContainer: {
    width: "95%",
    height: 38,
    marginVertical: 20,
    borderRadius: 8,
  },
});
