import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/routes";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
