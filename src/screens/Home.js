import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import image from "../assets/test.jpg";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={image}
          style={{ width: "100%", height: "100%" }}
        ></ImageBackground>
      </View>
    );
  }
}
