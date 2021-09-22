import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import AuthInput from "../components/AuthInput";
import InstagramButton from "../components/InstagramButton";
import { signIn } from "../features/authSlice";

const { width, height } = Dimensions.get("window");

const RegisterScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      style={styles.registerScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
    >
      <View style={styles.header}>
        <View style={{ ...styles.account, borderColor: colors.text }}>
          <Feather name="user" color={colors.text} size={width * 0.15} />
        </View>
        <View style={styles.form}>
          <AuthInput placeholder="Email" />
          <AuthInput placeholder="Password" secureTextEntry />
          <InstagramButton
            buttonColor={colors.primary}
            style={styles.signupButton}
            onButtonPress={() => dispatch(signIn())}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </InstagramButton>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.nextScreenText}>
          Already have an account?{" "}
          <Text
            style={{ ...styles.loginText, color: colors.text }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Log In.
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerScreen: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 1,
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
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
  loginText: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
