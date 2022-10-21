import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
import NavigationStack from "./src/Navigations/Stack";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationStack />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
