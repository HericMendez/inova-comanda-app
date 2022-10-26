import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import invert from "invert-color";
import styles from "./styles";

const TabButton = (props) => {
  console.log(props.focused)
  return (
    <View style={props.focused ? styles.active : ""}>
      <Ionicons name={props.icon} size={props.size} color={props.focused ? invert(props.color) : props.color} />
    </View>
  );
};

export default TabButton;



