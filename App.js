import React from "react";
import Router from "./src/Router";

import HomeStackNavigation from "./src/navigation/HomeStackNavigation";

import { getStatusBarHeight } from "react-native-status-bar-height";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer style={{ marginTop: getStatusBarHeight() }}>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
