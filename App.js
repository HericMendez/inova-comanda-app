import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import BottomTab from "./src/Navigations/Bottom";
import NavigationStack from "./src/Navigations/Stack";
import { LogBox } from 'react-native';
 


export default function App() {
//Ignore all log notifications
LogBox.ignoreAllLogs();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <BottomTab />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
