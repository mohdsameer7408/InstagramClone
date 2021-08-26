import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ChatHeaderButton = (props) => {
  const { colors } = useTheme();

  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color={colors.text}
      IconComponent={Ionicons}
    />
  );
};

export default ChatHeaderButton;
