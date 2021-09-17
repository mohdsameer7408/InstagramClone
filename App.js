import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";
import { SafeAreaView } from "react-native";

import InstagramNavigator from "./app/navigations/InstagramNavigator";

enableScreens();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InstagramNavigator />
    </SafeAreaView>
  );
}
