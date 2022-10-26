import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Home from "../../Screens/Home";
import About from "../../Screens/About";
import QRcodeReader from "../../Screens/QRcode";
import styles from "./styles";
import BottomTab from "../Bottom";


const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    
      <Stack.Navigator initialRouteName="HomeScreen">
 
        <Stack.Screen
          name="HomeScreen"
          component={Home}
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
        
      </Stack.Navigator>
 
  );
};

export default NavigationStack;
