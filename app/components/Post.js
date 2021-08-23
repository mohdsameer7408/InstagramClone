import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const Post = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.post}>
      <View style={styles.postSection}>
        <Image
          style={styles.postUserImage}
          resizeMode="cover"
          source={{
            uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
          }}
        />
        <Text style={{ ...styles.postUserName, color: colors.text }}>
          meme_coding
        </Text>
        <Ionicons name="ellipsis-vertical" size={20} color={colors.text} />
      </View>
      <Image
        style={styles.postImage}
        resizeMode="cover"
        source={{
          uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
        }}
      />
      <View style={styles.postHandlers}>
        <Ionicons
          name="heart-outline"
          size={28}
          color={colors.text}
          style={styles.postHandlerIcon}
        />
        <Ionicons
          name="chatbubble-outline"
          size={28}
          color={colors.text}
          style={styles.postHandlerIcon}
        />
        <Feather
          name="send"
          size={28}
          color={colors.text}
          style={{ ...styles.postHandlerIcon, flex: 1 }}
        />
        <Fontisto name="favorite" size={28} color={colors.text} />
      </View>
      <View style={styles.postDetails}>
        <Text style={{ ...styles.postDetailsTitle, color: colors.text }}>
          <Text style={styles.postDetailsText}>Liked by</Text>{" "}
          cyber_tech_society <Text style={styles.postDetailsText}>and</Text>{" "}
          2899 others
        </Text>
        <Text style={{ ...styles.postDetailsTitle, color: colors.text }}>
          meme_coding <Text style={styles.postDetailsText}>caption....</Text>
        </Text>
      </View>
      <View style={styles.postSection}>
        <Image
          style={styles.postUserImage}
          resizeMode="cover"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxvyM87RyvMZY3_7wbC2_aB5iAELtG4EPkHA&usqp=CAU",
          }}
        />
        <TextInput
          placeholder="Add a comment..."
          placeholderTextColor="#888"
          style={{ ...styles.commentInput, color: colors.text }}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    width: "100%",
  },
  postSection: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  postUserImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  postUserName: {
    flex: 1,
    marginLeft: 14,
    fontWeight: "700",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postHandlers: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  postHandlerIcon: {
    marginRight: 10,
  },
  postDetails: {
    padding: 10,
  },
  postDetailsTitle: {
    fontWeight: "700",
  },
  postDetailsText: {
    fontWeight: "200",
  },
  commentInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});
