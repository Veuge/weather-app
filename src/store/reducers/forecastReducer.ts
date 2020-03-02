import { IGetForecastActions } from "../actions/actionTypes";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  error: null,
  forecast: null
}

const reducer = (state = initialState, action: IGetForecastActions) => {
  switch(action.type) {
    case actionTypes.GET_FORECAST_START: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case actionTypes.GET_FORECAST_SUCCESS: {
      return {
        ...state,
        loading: false,
        forecast: action.data
      }
    }
    case actionTypes.GET_FORECAST_FAILURE: {
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
}

export default reducer;
