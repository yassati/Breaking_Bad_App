import React from "react";
import MapScreen from "../../screens/Map";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class MapNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={MapScreen}
        />
      </Stack.Navigator>
    );
  }
}
