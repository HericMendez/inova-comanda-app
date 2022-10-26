import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import About from "../../Screens/About";
import QRcodeReader from "../../Screens/QRcode";
import NavigationStack from "../Stack";

import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

import TabButton from "../../Components/Buttons/TabButton";
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: [
            {
              display: "flex",
              backgroundColor: "#222",

              justifyContent: 'center',
              alignItems: 'center'
          

            },
          ],
          tabBarShowLabel: false,

          tabBarLabelStyle: {
            paddingBottom: 0,
            color: "#ddd",
          },
          tabBarActiveTintColor: "#fff",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({focused, size, color }) => (
              <TabButton icon={"ios-book-outline"} size={36} color={color} focused={focused} />
            ),
            title: ""
          }
        }
          x
          component={NavigationStack}
        />
        <Tab.Screen
          name="Reader"
          options={{
            tabBarIcon: ({focused, size, color }) => (
              <TabButton icon={"md-qr-code-outline"} size={36} color={color} focused={focused} />
            ),
            title: "",
          }}
          component={QRcodeReader}
        />
        <Tab.Screen
          name="About"
          options={{
            tabBarIcon: ({focused, size, color }) => (
             <TabButton icon={"information-circle-outline"} size={36} color={color} focused={focused} />
            ),
          }}
          component={About}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
