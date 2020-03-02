import { combineReducers } from "redux";
import userPreferencesReducer from "./userPreferencesReducer";

export default combineReducers({
  userPrefs: userPreferencesReducer
});