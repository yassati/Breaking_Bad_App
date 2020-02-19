import React from "react";
import TorchhScreen from "../../screens/Torchh";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class MapNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Torch"
          component={TorchhScreen}
        />
      </Stack.Navigator>
    );
  }
}
