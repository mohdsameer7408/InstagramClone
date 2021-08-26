import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Search = ({ style, placeholder }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.search, ...style, backgroundColor: colors.card }}>
      <Ionicons name="search" size={22} color="#888" />
      <TextInput
        style={{ ...styles.searchInput, color: colors.text }}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
});
