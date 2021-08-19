import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailScreen from "../page/ProductDetailScreen/ProductDetailScreen";

import BottomTabNavigation from "./BottomTabNavigation";
import BasketScreen from "../page/BasketScreen/BasketScreen";

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <HomeStack.Navigator
      initialRouteName={"BottomNavigation"}
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen component={BottomTabNavigation} name={"BottomNavigation"} />
      <HomeStack.Screen
        component={ProductDetailScreen}
        name={"ProductDetail"}
      />
      <HomeStack.Screen
        component={BasketScreen}
        name={"BasketScreen"}
      />
    </HomeStack.Navigator>
  );
}
