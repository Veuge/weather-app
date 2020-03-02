import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  StyleSheet
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <View style={Styles.searchBarContainer}>
      <Text style={Styles.searchLabel}>Search a city to get its weather</Text>
      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.textInput}
          onChangeText={text => onSearchTermChange(text)}
          value={searchTerm}
        />
        <TouchableOpacity onPress={onSearch} style={Styles.searchButton}>
          <FontAwesome 
            name="search"
            size={15}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  searchBarContainer: {
    width: "85%",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  searchLabel: {
    fontSize: 18,
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "darkgray",
    borderRadius: 6,
    paddingLeft: 8
  },
  textInput: {
    height: "100%",
    flex: 1,
    padding: 8
  },
  searchButton: {
    height: "100%",
    width: 40,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderColor: "darkgray"
  }
})

export default SearchBar;