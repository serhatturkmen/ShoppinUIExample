import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const TestComp = (props) => {
  return (
    <View>
      <Text>{props.route.screenName}</Text>
    </View>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="test1"
          component={TestComp}
        />
        <BottomTab.Screen
          name="test2"
          component={TestComp}
          options={{ title: "null" }}
        />
        <BottomTab.Screen
          name="test3"
          component={TestComp}
          options={{ title: "Main" }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
