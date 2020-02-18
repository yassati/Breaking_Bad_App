import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import FooterNavigator from "./FooterNavigator";
// Import modals
import TestModal from "../screens/TestModal";


import { navigationRef } from "../RootNavigation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class NavigationDrawerContainerApp extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Main" drawerPosition="right">
        <Drawer.Screen name="Main" component={FooterNavigator} />
      </Drawer.Navigator>
    );
  }
}

export default class WrapperNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator mode="modal" headerMode="none">
          <Stack.Screen name="Main" component={NavigationDrawerContainerApp} />
          <Stack.Screen name="TestModal" component={TestModal} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
