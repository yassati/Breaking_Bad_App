import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Share,
} from "react-native";
import { Button, Card } from "react-native-paper";

export default class Torchh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };
  }
  componentDidMount() {
    return fetch("https://www.breakingbadapi.com/api/characters")
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
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          <View style={styles.container}>
            <Button onPress={this.onShare}>test</Button>
            {this.state.dataSource.map(item => {
              return (
                <Card style={styles.card}>
                  <View style={styles.flex}>
                    <Image
                      style={[{ width: 80, height: 120 }, styles.avatar]}
                      resizeMode="contain"
                      source={{
                        uri: `${item.img}`
                      }}
                    />
                    <View style={{ flex: 1 }}>
                      <View style={{ marginLeft: 20 }}>
                        <Text style={styles.owner_title}>{item.name}</Text>
                        <Text>Voir plus des détails</Text>
                      </View>
                    </View>
                  </View>
                </Card>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: "white"
  },
  flex: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    borderRadius: 10
  },
  owner_title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30
  },
  owner_infos: {
    textAlign: "justify"
  }
});
