import React from "react";
import CharactersScreen from "../../screens/Characters";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class MapNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
        />
      </Stack.Navigator>
    );
  }
}
