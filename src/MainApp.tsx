import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  ViewStyle
} from "react-native";
import Constants from "expo-constants";

import SearchBar from "./components/SearchBar";
import { getUserPreferencesThunk } from "./store/actions/userPreferencesActions";
import { getForecastThunk } from "./store/actions/forecastActions";
import WeatherScreen from "./containers/WeatherScreen";
import LoadingComponent from "./components/LoadingComponent";

interface IState {
  showSearchBar: boolean;
  searchTerm: string;
}

interface IProps {
  userPrefsLoading: boolean;
  favCities: any[],
  unit: string;
  doRetrieveUserPrefs: () => void;
  doGetForecast: (string) => void;
}

class MainApp extends Component<IProps, IState> {
  state = {
    showSearchBar: true,
    searchTerm: ""
  }

  componentDidMount() {
    this.props.doRetrieveUserPrefs();
  }

  componentDidUpdate(prevProps) {
    const { favCities, unit, doGetForecast } = this.props;
    if (favCities.length) {
      this.setState(
        { showSearchBar: false },
        () => {
          doGetForecast({
            id: favCities[0].id,
            units: unit
          });
        }
      );
    }
  }

  onSearchTermChange = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSearch = () => {
    const { searchTerm } = this.state;
    const { doGetForecast, unit } = this.props;
    doGetForecast({
      q: searchTerm,
      units: unit
    });
  }

  render() {
    const { showSearchBar, searchTerm } = this.state;
    const { userPrefsLoading } = this.props;
    return (
      <>
        <View style={Styles.statusBar} />
        <View style={Styles.mainContainer}>
          {userPrefsLoading ? (
            <LoadingComponent
              loadingMessage="Loading user preferences..."
            />
          ) : showSearchBar && (
            <SearchBar
              onSearch={this.onSearch}
              searchTerm={searchTerm}
              onSearchTermChange={this.onSearchTermChange}
            />
          )}
        </View>
      </>
    );
  }
};

interface IMainAppStyles {
  statusBar: ViewStyle;
  mainContainer: ViewStyle;
}

const Styles = StyleSheet.create<IMainAppStyles>({
  statusBar: {
    backgroundColor: "black",
    height: Constants.statusBarHeight
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = (state) => ({
  userPrefsLoading: state.userPrefs.loading,
  favCities: state.userPrefs.favCities,
  unit: state.userPrefs.unit
});

const mapDispatchToProps = dispatch => ({
  doRetrieveUserPrefs: () => dispatch(getUserPreferencesThunk()),
  doGetForecast: (params) => dispatch(getForecastThunk(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
