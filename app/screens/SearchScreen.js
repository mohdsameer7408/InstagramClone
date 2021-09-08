import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import Search from "../components/Search";

const SearchScreen = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Search style={styles.searchContainer} placeholder="Search" />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  searchContainer: {
    width: "95%",
    height: 38,
    marginTop: 50,
    borderRadius: 8,
  },
});
