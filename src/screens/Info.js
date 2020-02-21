import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Share,
  Linking
} from "react-native";
import { WebView } from "react-native-webview";
import * as RootNavigation from "../RootNavigation";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, Card } from "react-native-paper";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      dataSource2: []
    };
  }

  componentDidMount() {
    return (
      fetch(`https://www.breakingbadapi.com/api/death-count`)
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
        }),
      fetch(`https://www.breakingbadapi.com/api/episodes/1`)
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource2: responseJson
            },
            () => {}
          );
        })
        .catch(error => {
          console.error(error);
        })
    );
  }

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
          <View>
            <View>
              <Card style={styles.card}>
                <View style={{ height: 300, marginTop: 20 }}>
                  <Text>Intro :</Text>
                  <WebView
                    style={{ marginTop: 10 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{
                      uri: "https://www.youtube.com/embed/3U6PSWyv5sc"
                    }}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Platform.OS === "ios") {
                        Linking.openURL(
                          `http://maps.apple.com/?daddr=Albuquerque, New Mexico`
                        );
                      } else {
                        Linking.openURL(
                          `http://maps.google.com/?daddr=Albuquerque, New Mexico`
                        );
                      }
                    }}
                    style={{
                      backgroundColor: "#f7b731",
                      padding: 12,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      borderColor: "rgba(0, 0, 0, 0.1)",
                      fontWeight: "bold",
                      width: 250,
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      Filming location(see in the map)
                    </Text>
                  </TouchableOpacity>
                </View>
                {this.state.dataSource.map(item => {
                  return (
                    <View key={item.deathCount} style={{ marginTop: 20 }}>
                      <Text style={{ marginTop: 20 }}>No. of seasons : 5</Text>
                      <Text style={{ marginTop: 20 }}>
                        No. of episodes : 62
                      </Text>
                      <Text style={{ marginTop: 20 }}>
                        Death numbers : {item.deathCount}
                      </Text>
                    </View>
                  );
                })}
                {this.state.dataSource2.map(item => {
                  return (
                    <View style={styles.card}>
                      <Text>First episode :</Text>
                      <Text style={{ marginTop: 10 }}>Title: {item.title}</Text>
                      <Text style={{ marginTop: 10 }}>
                        Air date: {item.air_date}
                      </Text>
                    </View>
                  );
                })}
              </Card>
            </View>
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
  infos: {
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 18
  },
  header: {
    backgroundColor: "#f7b731",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 3, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  }
});
