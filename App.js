import { StyleSheet, Text, View } from "react-native";
import { SplashScreen } from "./screens/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {CategoryScreen} from "./screens/CategoryScreen";
import { DrawerNavigation } from "./navigation/DrawerNavigation";

export default function App() {

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  // Stack for Splash Screen and Home Screen
  const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={DrawerNavigation} />
    </Stack.Navigator>
  );



  return (

    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

