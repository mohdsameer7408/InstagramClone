import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import InstagramNavigator from "./app/navigations/InstagramNavigator";
import store from "./app/features/store";

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <InstagramNavigator />
      </SafeAreaView>
    </Provider>
  );
}
