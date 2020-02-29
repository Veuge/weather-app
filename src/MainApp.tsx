import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle
} from "react-native";

interface IMainAppStyles {
  safeArea: ViewStyle;
  mainContainer: ViewStyle;
  text: TextStyle;
}

const MainApp = () => {
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

export default MainApp;
