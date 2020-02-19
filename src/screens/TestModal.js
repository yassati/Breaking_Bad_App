import React, { Component } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import * as RootNavigation from "../RootNavigation";

export default class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  componentDidMount() {
    return fetch(
      `https://www.breakingbadapi.com/api/characters/${this.props &&
        this.props.route &&
        this.props.route.params &&
        this.props.route.params.idChar}`
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          () => {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          <View>
            {this.state.dataSource.map(item => {
              return <Text>{item.name}</Text>;
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
