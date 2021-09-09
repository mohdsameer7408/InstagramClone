import React from "react";
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import Reel from "../components/Reel";

const { height } = Dimensions.get("window");

const ReelsScreen = () => {
  return (
    <View style={styles.reelsScreen}>
      <FlatList
        style={{ height: height * 0.925 }}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        data={Array(5).fill()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <Reel />}
      />
    </View>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  reelsScreen: {
    marginTop: StatusBar.currentHeight + 10,
  },
});
