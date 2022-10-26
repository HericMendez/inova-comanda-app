import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const About = ({navigation, route}) => {
    const handleNextScreen = () => {
        navigation.navigate("QRcodeReaderScreen", { data: "teste" });
      };
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>About Screen</Text>
        <View style={styles.content}>
      
      <Text style={styles.text}>This does nothing, it's just text</Text>

      </View>
      <View>
      <Button title="Go to the Next Screen" onPress={handleNextScreen} />
      </View>
      
    </View>
  );
};

export default About;
