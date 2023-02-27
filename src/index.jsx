import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MBTNav" component={MBTNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const MBT = createMaterialBottomTabNavigator();
function MBTNavigation() {
  return (
    <MBT.Navigator>
      <MBT.Screen name="Home" component={HomeScreen} />
      <MBT.Screen name="Login" component={LoginScreen} />
      <MBT.Screen name="Cadastro" component={HomeScreen} />
    </MBT.Navigator>
  );
}
