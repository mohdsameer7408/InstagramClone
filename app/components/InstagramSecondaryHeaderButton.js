import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { HeaderButton } from "react-navigation-header-buttons";

const InstagramSecondaryHeaderButton = (props) => {
  const { colors } = useTheme();

  return (
    <HeaderButton
      {...props}
      iconSize={26}
      color={colors.primary}
      IconComponent={MaterialCommunityIcons}
    />
  );
};

export default InstagramSecondaryHeaderButton;
