import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../../Screens/Home";
import About from "../../Screens/About";
import QRcodeReader from "../../Screens/QRcodeReader";
import styles from "./styles";

import BottomTab from "../BottomTab";
const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name='Root' component={BottomTab} options={{ headerShown: false }} />
        <Stack.Group>
        <Stack.Screen
          name="HomeScreen"
          component={BottomTab}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            title: "Overview",
            /*      headerStyle: { backgroundColor: "#222" },
            headerTintColor: "#FFF", */
          }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={About}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            title: "About this App",
          }}
        />
        <Stack.Screen
          name="QRcodeReaderScreen"
          component={QRcodeReader}
          options={{
            ...TransitionPresets.SlideFromRightIOS,
            title: "QR Code Reader",
          }}
        />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
