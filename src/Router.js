import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigation from "./navigation/HomeStackNavigation";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Router = () => {
  return (
    <NavigationContainer style={{ marginTop: getStatusBarHeight() }}>
      <HomeStackNavigation />
    </NavigationContainer>
  );
};

export default Router;
