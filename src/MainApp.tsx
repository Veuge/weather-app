import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle
} from "react-native";

import { getForecastThunk } from "./store/actions/forecastActions";

interface IMainAppStyles {
  safeArea: ViewStyle;
  mainContainer: ViewStyle;
  text: TextStyle;
}

const MainApp = props => {
  useEffect(() => {
    props.doGetForecast("london");
  }, [])

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.text}>Welcome to Weather App!</Text>
    </View>
  );
};

const Styles = StyleSheet.create<IMainAppStyles>({
  safeArea: {
    backgroundColor: "#FFFFFF"
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#d35400"
  }
});

const mapDispatchToProps = dispatch => ({
  doGetForecast: query => dispatch(getForecastThunk(query))
})

export default connect(null, mapDispatchToProps)(MainApp);
