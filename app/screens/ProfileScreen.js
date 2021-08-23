import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileData}>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            resizeMode="cover"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
            }}
          />
        </View>
        <View style={styles.statsCardContainer}>
          <View style={styles.statsCard}>
            <Text style={{ ...styles.statsTitle, color: colors.text }}>12</Text>
            <Text style={{ color: colors.text }}>Posts</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={{ ...styles.statsTitle, color: colors.text }}>
              239
            </Text>
            <Text style={{ color: colors.text }}>Followers</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={{ ...styles.statsTitle, color: colors.text }}>
              167
            </Text>
            <Text style={{ color: colors.text }}>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.profileBio}>
        <Text style={{ color: colors.text, fontWeight: "700" }}>
          Memes On Coding
        </Text>
        <Text style={{ color: colors.text }}>Tech Memes</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  profileData: {
    width: width * 0.95,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 86,
    height: 86,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 43,
    borderColor: "#eee",
    borderWidth: 1,
  },
  profileImage: {
    width: 76,
    height: 76,
    borderRadius: 38,
  },
  statsCardContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statsCard: {
    alignItems: "center",
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileBio: {
    width: width * 0.95,
  },
});
