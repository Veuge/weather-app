import React from "react";
import { ActivityIndicator, Text, StyleSheet } from "react-native";

const LoadingComponent = ({ loadingMessage }) => {
  return (
    <>
      <ActivityIndicator size="large" color="blue" />
      <Text style={Styles.text}>{loadingMessage}</Text>
    </>
  );
}

const Styles = StyleSheet.create({
  text: {
    color: "#d35400"
  }
})

export default LoadingComponent;
