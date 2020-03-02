import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  favCities: [],
  unit: "",
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.RETRIEVE_USER_PREFS: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case actionTypes.RETRIEVE_FAV_CITIES: {
      return {
        ...state,
        favCities: action.data || []
      }
    }
    case actionTypes.RETRIEVE_UNIT: {
      return {
        ...state,
        loading: false,
        unit: action.unit || "metric"
      }
    }
    case actionTypes.RETRIEVE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: {
      return state;
    }
  }
};

export default reducer;
