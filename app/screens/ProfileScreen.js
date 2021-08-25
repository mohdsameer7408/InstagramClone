import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import InstagramButton from "../components/InstagramButton";

const { width } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [isTabActive, setIsTabActive] = useState(true);

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
      <View style={styles.buttonsContainer}>
        <InstagramButton
          style={styles.editProfileButton}
          onButtonPress={() => navigation.navigate("EditProfileScreen")}
        >
          <Text style={{ color: colors.text }}>Edit Profile</Text>
        </InstagramButton>
        <InstagramButton style={styles.discoverButton} onButtonPress={() => {}}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={23}
            color={colors.text}
          />
        </InstagramButton>
      </View>
      <View style={styles.topTab}>
        <TouchableOpacity
          style={{
            ...styles.tab,
            borderColor: colors.text,
            borderBottomWidth: isTabActive ? 2 : 0,
          }}
          onPress={() => setIsTabActive(true)}
        >
          <MaterialIcons
            name="grid-on"
            size={23}
            color={isTabActive ? colors.text : "#888"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tab,
            borderColor: colors.text,
            borderBottomWidth: isTabActive ? 0 : 2,
          }}
          onPress={() => setIsTabActive(false)}
        >
          <MaterialIcons
            name="perm-contact-calendar"
            size={23}
            color={isTabActive ? "#888" : colors.text}
          />
        </TouchableOpacity>
      </View>
      {isTabActive ? (
        <View style={styles.postsGrid}>
          {Array(12)
            .fill()
            .map((_, index) => (
              <TouchableOpacity key={index}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
                  }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
        </View>
      ) : (
        <View style={styles.postsGrid}>
          {Array(7)
            .fill()
            .map((_, index) => (
              <TouchableOpacity key={index}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
                  }}
                  style={styles.postImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
        </View>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 50,
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
    marginBottom: 20,
  },
  buttonsContainer: {
    width: width * 0.95,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  editProfileButton: {
    width: "89%",
    height: 33,
  },
  discoverButton: {
    width: "9%",
    height: 33,
  },
  topTab: {
    width,
    height: 40,
    flexDirection: "row",
    marginVertical: 5,
  },
  tab: {
    width: width * 0.5,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  postsGrid: {
    width,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  postImage: {
    width: width * 0.33,
    height: 120,
    marginBottom: 3,
  },
});
