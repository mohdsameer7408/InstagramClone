import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const FormInput = ({ id, label }) => {
  const { colors } = useTheme();
  const [value, setValue] = useState("");

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={{
          ...styles.input,
          borderColor: colors.text,
          color: colors.text,
        }}
        value={value}
        onChangeText={setValue}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    height: 52,
    marginBottom: 10,
  },
  inputLabel: {
    color: "#aaa",
    fontSize: 12,
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
  },
});
