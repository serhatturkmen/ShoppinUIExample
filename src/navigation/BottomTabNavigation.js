import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../page/HomeScreen";
import ProfileScreen from "../page/ProfileScreen";
import SettingScreen from "../page/SettingScreen";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName={"HomePage"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#D3DCDE",
      }}
    >
      <BottomTab.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          tabBarIcon: (param) => (
            <MaterialCommunityIcons
              name={"home"}
              size={34}
              color={param.color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (param) => (
            <Ionicons name={"person"} size={28} color={param.color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: (param) => (
            <Ionicons name={"settings-sharp"} size={28} color={param.color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
