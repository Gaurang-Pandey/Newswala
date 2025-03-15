import { SplashScreen } from "./screens/SplashScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigation } from "./navigation/DrawerNavigation";

export default function App() {
  const Stack = createStackNavigator();

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
