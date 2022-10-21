import React from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Home = ({ navigation, route }) => {
  const handleNextScreen = () => {
    navigation.navigate("AboutScreen", { data: "teste" });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
      <View style={styles.content}>
        
        <Text style={styles.text}>
          You can acess the main screens from the Bottom Tab.
        </Text>
        <Text style={styles.text}>Not every screen will have a Bottom Tab.</Text>
        <Text style={styles.text}>
          But you can return to the previous screen by using the top navigation.
        </Text>
      </View>

      <View style={{ width: '50%'}}>
        <Button title="Press me" onPress={handleNextScreen} />
      </View>
    </View>
  );
};

export default Home;
