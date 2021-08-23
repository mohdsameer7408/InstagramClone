import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";

import InstagramNavigator from "./app/navigations/InstagramNavigator";

enableScreens();

export default function App() {
  return <InstagramNavigator />;
}
