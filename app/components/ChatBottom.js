import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ChatBottom = () => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.chatBottom, backgroundColor: colors.border }}>
      <TouchableOpacity
        style={{ ...styles.chatLeft, backgroundColor: colors.primary }}
      >
        <Ionicons name="camera" size={23} color={colors.text} />
      </TouchableOpacity>
      <TextInput
        style={{ ...styles.chatMiddle, color: colors.text }}
        placeholder="Message..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.chatRight} onPress={() => {}}>
        <Text style={{ ...styles.sendText, color: colors.primary }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBottom;

const styles = StyleSheet.create({
  chatBottom: {
    width: width * 0.98,
    height: 56,
    borderRadius: width * 0.15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  chatLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  chatMiddle: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  chatRight: {
    marginRight: 10,
  },
  sendText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
