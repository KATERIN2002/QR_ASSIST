import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogIn } from "../core/security/login";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="/">
      <Stack.Screen
        name="/"
        options={{ headerShown: false, title: "init" }}
        component={LogIn}
      />
    </Stack.Navigator>
  );
}
