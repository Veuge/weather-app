import * as actionTypes from "./actionTypes";
import { AsyncStorage } from 'react-native';

export const loadingUserPreferences = () => ({
  type: actionTypes.RETRIEVE_USER_PREFS
})

export const retrieveFavoriteCities = (data) => ({
  type: actionTypes.RETRIEVE_FAV_CITIES,
  data
});

export const retrieveUnit = (data) => ({
  type: actionTypes.RETRIEVE_UNIT,
  data
});

export const retrieveError = (error) => ({
  type: actionTypes.RETRIEVE_ERROR,
  error
});

// THUNKS
export const getUserPreferencesThunk = () => {
  return dispatch => {
    dispatch(loadingUserPreferences());
    Promise.all([
      AsyncStorage.getItem("@favCities"),
      AsyncStorage.getItem("@unit")
    ])
      .then(([favCities, unit]) => {
        dispatch(retrieveFavoriteCities(favCities));
        dispatch(retrieveUnit(unit));
      })
      .catch(e => {
        dispatch(retrieveError("Something went wrong!"));
      })
  }
}


