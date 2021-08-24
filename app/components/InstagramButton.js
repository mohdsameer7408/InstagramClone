import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

const InstagramButton = ({ style, buttonColor, children, onButtonPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableComponent
        style={{ flex: 1 }}
        onPress={onButtonPress}
        useForeground
      >
        <View
          style={{
            ...styles.buttonWrapper,
            backgroundColor: buttonColor ? buttonColor : "transparent",
          }}
        >
          {children}
        </View>
      </TouchableComponent>
    </View>
  );
};

export default InstagramButton;

const styles = StyleSheet.create({
  buttonContainer: {
    overflow: "hidden",
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 8,
  },
  buttonWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
