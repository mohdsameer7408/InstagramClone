import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const InstagramHeaderButton = (props) => {
  const { colors } = useTheme();

  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color={colors.text}
      IconComponent={MaterialCommunityIcons}
    />
  );
};

export default InstagramHeaderButton;
