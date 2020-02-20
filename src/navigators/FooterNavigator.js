import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeNavigator from "./stackNavigators/HomeNavigator";
import MapNavigator from "./stackNavigators/MapNavigator";
import CharactersNavigator from "./stackNavigators/CharactersNavigator";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();

export default class FooterNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        sceneAnimationEnabled={true}
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={20} />
            )
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapNavigator}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color }) => (
              <Icon name="map" color={color} size={20} />
            )
          }}
        />
        <Tab.Screen
          name="Characters"
          component={CharactersNavigator}
          options={{
            tabBarLabel: "Characters",
            tabBarIcon: ({ color }) => (
              <Icon name="users" color={color} size={20} />
            )
          }}
        />
      </Tab.Navigator>
    );
  }
}
