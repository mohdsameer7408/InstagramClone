import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native-appearance";

import AuthInput from "../components/AuthInput";
import InstagramButton from "../components/InstagramButton";
import instagramIcon from "../assets/images/instagram.png";
import instagramDefaultIcon from "../assets/images/instagram-default.png";

const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const scheme = useColorScheme();
  const imageUrl = scheme === "dark" ? instagramIcon : instagramDefaultIcon;

  return (
    <KeyboardAvoidingView
      style={styles.loginScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <View style={styles.header}>
        <Image source={imageUrl} style={styles.icon} resizeMode="contain" />
        <View style={styles.form}>
          <AuthInput placeholder="Email" />
          <AuthInput placeholder="Password" secureTextEntry />
          <InstagramButton
            buttonColor={colors.primary}
            style={styles.signupButton}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </InstagramButton>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.nextScreenText}>
          Don't have an account?{" "}
          <Text
            style={{ ...styles.signupText, color: colors.text }}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Sign Up.
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: width * 0.9,
    height: 50,
  },
  form: {
    width: "100%",
    marginTop: 10,
    alignItems: "center",
  },
  signupButton: {
    width: width * 0.9,
    height: height * 0.065,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    width,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#333",
    borderTopWidth: 1,
  },
  nextScreenText: {
    color: "#ccc",
    fontSize: 12,
  },
  signupText: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
