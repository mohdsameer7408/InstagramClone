import React, { useLayoutEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import InstagramSecondaryHeaderButton from "../components/InstagramSecondaryHeaderButton";

const { width } = Dimensions.get("window");

const CreatePostScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const savePostHandler = () => {
    navigation.pop();
    console.log("Post saved");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={InstagramSecondaryHeaderButton}>
          <Item title="create" iconName="check" onPress={savePostHandler} />
        </HeaderButtons>
      ),
    });
  }, [navigation, savePostHandler]);

  return (
    <View style={styles.createPostScreen}>
      <View style={styles.inputsContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={styles.imageInput}
            resizeMode="cover"
            source={{
              uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
            }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Write a caption..."
          placeholderTextColor="#ccc"
          style={{ ...styles.captionInput, color: colors.text }}
        />
      </View>
      <View style={styles.inputsContainer}>
        <Text style={{ ...styles.title, color: colors.text }}>Tag People</Text>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={{ ...styles.title, color: colors.text }}>
          Add Location
        </Text>
      </View>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  createPostScreen: {
    flex: 1,
  },
  inputsContainer: {
    width,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#222",
    borderBottomWidth: 0.6,
  },
  imageInput: {
    width: 56,
    height: 56,
  },
  captionInput: {
    marginLeft: 12,
    fontSize: 14,
  },
  title: {
    fontSize: 16,
  },
});
