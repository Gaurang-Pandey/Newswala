import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens/HomeScreen";
import { CategoryScreen } from "../screens/CategoryScreen";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: "NewsWala",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 34,
          fontWeight: "bold",
        },
        headerRight: () => (
          <Image
            source={require("../assets/Logo.png")}
            style={{
              width: 40,
              height: 40,
              marginRight: 15,
              resizeMode: "contain",
            }}
          />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Sports"
        component={CategoryScreen}
        initialParams={{ category: "sports" }}
      />
      <Drawer.Screen
        name="Business"
        component={CategoryScreen}
        initialParams={{ category: "business" }}
      />
      <Drawer.Screen
        name="Entertainment"
        component={CategoryScreen}
        initialParams={{ category: "entertainment" }}
      />
      <Drawer.Screen
        name="Science"
        component={CategoryScreen}
        initialParams={{ category: "science" }}
      />
      <Drawer.Screen
        name="Technology"
        component={CategoryScreen}
        initialParams={{ category: "technology" }}
      />
      <Drawer.Screen
        name="Health"
        component={CategoryScreen}
        initialParams={{ category: "health" }}
      />
    </Drawer.Navigator>
  );
};
