import React, { Component } from "react";
import { Text, TextStyle, StyleSheet, View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface IProps {
  city: string;
  weatherIcon: string;
  currentTemp: number;
  units: string;
  description: string;
}

class WeatherScreen extends Component<IProps> {
  render() {
    const { city, weatherIcon, currentTemp, units, description } = this.props;
    return (
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>{city}</Text>
        <View style={Styles.infoContainer}>
          <MaterialCommunityIcons
            size={85}
            name={weatherIcon}
            color="white"
          />
          <View>
            <Text style={[Styles.textStyle, Styles.tempText]}>
              {currentTemp} °{units === "metric" ? "C" : "F"}
            </Text>
            <Text style={[Styles.textStyle, Styles.descriptionText]}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

interface IWeatherStyles {
  container: ViewStyle;
  textStyle: TextStyle;
  infoContainer: ViewStyle;
  tempText: TextStyle;
  descriptionText: TextStyle;
}

const Styles = StyleSheet.create<IWeatherStyles>({
  container: {
    backgroundColor: "#f39c12",
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center"
  },
  textStyle: {
    color: "white"
  },
  infoContainer: {
    margin: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  tempText: {
    fontSize: 40,
    fontWeight: "700"
  },
  descriptionText: {
    fontSize: 30,
    fontWeight: "700"
  }
})

export default WeatherScreen;

