import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Chat = () => {
  const { colors } = useTheme();

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.chat}>
      <TouchableComponent style={{ flex: 1 }} useForeground onPress={() => {}}>
        <View style={styles.chatWrapper}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
            }}
            resizeMode="cover"
            style={styles.profileImage}
          />
          <View style={styles.chatDetails}>
            <Text style={{ ...styles.userName, color: colors.text }}>
              John Smith
            </Text>
            <Text style={styles.message}>How you doing?</Text>
          </View>
          <MaterialCommunityIcons
            name="camera-outline"
            size={27}
            color={colors.text}
          />
        </View>
      </TouchableComponent>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chat: {
    overflow: "hidden",
    width,
    height: 70,
  },
  chatWrapper: {
    width: "100%",
    height: "100%",
    paddingHorizontal: width * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: (width * 0.14) / 2,
  },
  chatDetails: {
    width: width * 0.6,
  },
  userName: {
    fontSize: 15,
    fontWeight: "600",
  },
  message: {
    color: "#888",
    fontSize: 14,
  },
});
