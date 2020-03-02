import { combineReducers } from "redux";
import userPreferencesReducer from "./userPreferencesReducer";
import forecastReducer from "./forecastReducer";

export default combineReducers({
  userPrefs: userPreferencesReducer,
  retrievedForecast: forecastReducer
});