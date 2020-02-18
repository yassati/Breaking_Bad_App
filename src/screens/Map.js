import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Paris",
      numbrePhone: "0606060606"
    };
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: 400
          }}
        >
          <Text> Map </Text>
          <GooglePlacesAutocomplete
            placeholder="Lieu"
            minLength={1}
            autoFocus={false}
            returnKeyType={"search"}
            keyboardAppearance={"light"}
            listViewDisplayed="auto"
            fetchDetails={true}
            renderDescription={row => {
              return row.description;
            }}
            onPress={(data, details = null) => {
              this.setState({ address: data.description });
            }}
            getDefaultValue={() => "Paris"}
            query={{
              key: "api key",
              language: "fr"
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            GooglePlacesSearchQuery={{
              rankby: "distance",
              type: "cafe"
            }}
            GooglePlacesDetailsQuery={{
              fields: "formatted_address"
            }}
            filterReverseGeocodingByTypes={[
              "locality",
              "administrative_area_level_3"
            ]}
            debounce={200}
            styles={{
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
                borderTopWidth: 0,
                borderBottomWidth: 0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: "#5d5d5d",
                fontSize: 16,
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 10
              },
              predefinedPlacesDescription: {
                backgroundColor: "red"
              }
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS === "ios") {
              Linking.openURL(
                `http://maps.apple.com/?daddr=${this.state.address}`
              );
            } else {
              Linking.openURL(
                `http://maps.google.com/?daddr=${this.state.address}`
              );
            }
          }}
        >
          <Text style={{ color: "#00cc66" }}>Voir sur une carte</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              `sms:${this.state.numbrePhone}?body=${this.state.address}`
            );
          }}
        >
          <Text style={{ color: "#00cc66" }}>Contacter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
