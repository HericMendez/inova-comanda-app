import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import invert from "invert-color";
import styles from "./styles";

const ReloadButton = ({ size, color }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="reload" size={size} color={invert(color)} />
    </View>
  );
};

export default ReloadButton;



