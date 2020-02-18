import React from "react";
import TestScreen from "../../screens/Test";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class TestNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={TestScreen}
        />
      </Stack.Navigator>
    );
  }
}
