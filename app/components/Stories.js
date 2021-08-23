import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import Story from "./Story";

const { width } = Dimensions.get("window");

const Stories = () => {
  return (
    <View style={styles.stories}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ index }) => <Story add={index === 0 ? true : false} />}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    width,
    height: 105,
    paddingLeft: 5,
    borderColor: "#111",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  storiesContainer: {
    height: "98%",
    alignItems: "center",
  },
});
