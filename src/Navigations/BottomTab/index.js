import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/Home";
import About from "../../Screens/About";
import QRcodeReader from "../../Screens/QRcodeReader";
import NavigationStack from "../Stack";
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: [{ display: 'flex' }],
      tabBarShowLabel: true,
      tabBarLabelStyle: {
        paddingBottom: 6,
        color: '#333',
      },
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Reader" component={QRcodeReader} />
    </Tab.Navigator>
  );
};

export default BottomTab;
