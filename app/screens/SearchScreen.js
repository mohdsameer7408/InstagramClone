import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Search from "../components/Search";

const { width } = Dimensions.get("window");

const SearchScreen = () => {
  return (
    <FlatList
      style={styles.searchScreen}
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      ListHeaderComponent={
        <Search style={styles.searchContainer} placeholder="Search" />
      }
      ItemSeparatorComponent={() => (
        <View style={{ width: "100%", height: 1 }} />
      )}
      renderItem={() => (
        <TouchableOpacity>
          <Image
            style={styles.postImage}
            resizeMode="cover"
            source={{
              uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchScreen: {
    marginTop: StatusBar.currentHeight + 10,
  },
  searchContainer: {
    width: "95%",
    height: 34,
    marginBottom: 10,
    borderRadius: 8,
    alignSelf: "center",
  },
  postImage: {
    width: width * 0.33,
    height: 130,
    marginRight: 1,
  },
});
