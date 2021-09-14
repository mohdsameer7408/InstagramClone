import React, { useLayoutEffect, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import InstagramSecondaryHeaderButton from "../components/InstagramSecondaryHeaderButton";
import FormInput from "../components/FormInput";
import InstagramAlert from "../components/InstagramAlert";

const { width } = Dimensions.get("window");

const EditProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { isAlertOpened, setIsAlertOpened } = useState(false);

  const profileSaveHandler = () => {
    setIsAlertOpened(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={InstagramSecondaryHeaderButton}>
          <Item title="save" iconName="check" onPress={profileSaveHandler} />
        </HeaderButtons>
      ),
    });
  }, [navigation, profileSaveHandler]);

  return (
    <KeyboardAvoidingView
      style={styles.editProfileScreen}
      behavior={Platform.OS === "ios" ? "padding" : "position"}
      keyboardVerticalOffset={-30}
    >
      <InstagramAlert
        isAlertOpened={isAlertOpened}
        title="Unsaved Changes"
        message="Do you want to leave the changes that you made to your profile!"
        buttons={[
          {
            text: "Ok",
            onPress: () => {
              setIsAlertOpened(false);
              navigation.pop();
            },
          },
          { text: "Cancel", onPress: () => {}, type: "danger" },
        ]}
      />
      <View style={styles.formContainer}>
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
          }}
        />
        <Text style={{ ...styles.changePictureText, color: colors.primary }}>
          Change Profile Photo
        </Text>
        <View style={styles.form}>
          <FormInput label="Name" />
          <FormInput label="User Name" />
          <FormInput label="Website" />
          <FormInput label="Bio" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  editProfileScreen: {
    flex: 1,
    alignItems: "center",
  },
  formContainer: {
    width: width * 0.9,
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  changePictureText: {
    fontSize: 16,
    marginBottom: 10,
  },
  form: {
    width: "100%",
  },
});
