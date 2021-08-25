import React from "react";
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const InstagramAlert = ({
  title,
  message,
  buttons,
  isAlertOpened,
  closeAlert,
}) => {
  const { colors } = useTheme();

  return (
    <Modal visible={true} statusBarTranslucent transparent animationType="fade">
      <View style={styles.alertContainer}>
        <View style={{ ...styles.alert, backgroundColor: colors.card }}>
          <View style={styles.alertDetails}>
            <Text style={{ ...styles.alertTitle, color: colors.text }}>
              {title}
            </Text>
            <Text style={styles.alertMessage}>{message}</Text>
          </View>
          <View style={styles.actionButtons}>
            {buttons ? (
              buttons?.map(({ text, onPress, type }, index) => (
                <TouchableOpacity
                  style={styles.button}
                  onPress={onPress}
                  key={index}
                >
                  <Text
                    style={{
                      ...styles.buttonText,
                      color: type
                        ? type === "primary"
                          ? colors.primary
                          : "red"
                        : colors.text,
                    }}
                  >
                    {text}
                  </Text>
                </TouchableOpacity>
              ))
            ) : (
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={{ ...styles.buttonText, color: colors.primary }}>
                  Ok
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InstagramAlert;

const styles = StyleSheet.create({
  alertContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  alert: {
    width: width * 0.65,
    borderRadius: 12,
  },
  alertDetails: {
    paddingHorizontal: width * 0.1,
    alignItems: "center",
  },
  alertTitle: {
    marginTop: 23,
    fontSize: 18,
    fontWeight: "bold",
  },
  alertMessage: {
    marginTop: 14,
    color: "#888",
    textAlign: "center",
  },
  actionButtons: {
    width: "100%",
    marginTop: 28,
  },
  button: {
    width: "100%",
    height: 50,
    borderColor: "#222",
    borderTopWidth: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
});
