import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const AuthInput = ({ style, placeholder, ...rest }) => {
  const { colors } = useTheme();
  const [value, setValue] = useState("");

  return (
    <View
      style={{ ...styles.authInput, ...style, backgroundColor: colors.border }}
    >
      <TextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={{ color: colors.text }}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  authInput: {
    width: width * 0.9,
    height: height * 0.065,
    justifyContent: "center",
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 20,
  },
});
