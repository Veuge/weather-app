import { IRequestError } from "../../api/axios-config";
import { IGetForecastActions } from "./actionTypes";
import * as actionTypes from "./actionTypes";
import { getForecastWs } from "../../api/getForecast";

// ACTIONS
const getForecastStartAction = (): IGetForecastActions => ({
  type: actionTypes.GET_FORECAST_START
});

const getForecastSuccessAction = (data): IGetForecastActions => ({
  type: actionTypes.GET_FORECAST_SUCCESS,
  data
});

const getForecastFailureAction = (error: IRequestError): IGetForecastActions => ({
  type: actionTypes.GET_FORECAST_FAILURE,
  error
});

// THUNKS!
export const getForecastThunk = (params: any) => {
  return dispatch => {
    dispatch(getForecastStartAction());
    getForecastWs(params)
      .then(({ data }) => {
        dispatch(getForecastSuccessAction(data.forecast));
      })
      .catch(e => {
        dispatch(getForecastFailureAction(e));
      });
  }
};