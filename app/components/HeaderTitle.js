import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { useColorScheme } from "react-native-appearance";
import instagramIcon from "../assets/images/instagram.png";
import instagramDefaultIcon from "../assets/images/instagram-default.png";

const HeaderTitle = () => {
  const scheme = useColorScheme();
  const imageUrl = scheme === "dark" ? instagramIcon : instagramDefaultIcon;

  return (
    <View style={styles.headerTitle}>
      <Image
        source={imageUrl}
        style={styles.headerTitleImage}
        resizeMode="contain"
      />
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  headerTitle: {
    width: "100%",
    height: 40,
  },
  headerTitleImage: {
    width: 100,
    height: "100%",
  },
});
