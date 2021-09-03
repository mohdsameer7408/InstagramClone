import React from "react";
import { Image, Modal, Pressable, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const StoryModal = ({ isStoryOpened, closeStory }) => {
  const { colors } = useTheme();

  return (
    <Modal visible={isStoryOpened} transparent animationType="fade">
      <Pressable
        style={{ ...styles.modalContainer, backgroundColor: colors.background }}
        onPress={closeStory}
      >
        <Image
          resizeMode="contain"
          style={styles.storyImage}
          source={{
            uri: "https://i.pinimg.com/originals/97/d8/20/97d820675f0214b417d6545c899ec844.jpg",
          }}
        />
      </Pressable>
    </Modal>
  );
};

export default StoryModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
});
