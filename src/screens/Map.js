import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ScrollView,
  Share
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Paris",
    };
  }
  onShare = async () => {
    try {
      await Share.share({
        message: this.state.address
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView>
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
            getDefaultValue={() => ""}
            query={{
              key: "test",
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
              container: {
                backgroundColor: "white",
                margin: 20
              },
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
                borderTopWidth: 0,
                borderBottomWidth: 0,
                width: "100%"
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: "#5d5d5d",
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: "#1faadb"
              }
            }}
          />
          <View style={{ margin: 20 }}>
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
              <Text style={{ color: "white" }}>Voir sur une carte</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={
                this.onShare
              }
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
                marginTop: 20,
                marginRight: "auto"
              }}
            >
              <Text style={{ color: "white" }}>SEND SMS</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}