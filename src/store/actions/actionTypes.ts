import { IRequestError } from "../../api/axios-config";

export const GET_FORECAST_START = "GET_FORECAST_START";
export const GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS";
export const GET_FORECAST_FAILURE = "GET_FORECAST_FAILURE";

interface IGetForecastStartAction {
  type: typeof GET_FORECAST_START;
}

interface IGetForecastSuccessAction {
  type: typeof GET_FORECAST_SUCCESS,
  data: any // TODO: formalize data type.
}

interface IGetForecastFailureAction {
  type: typeof GET_FORECAST_FAILURE,
  error: IRequestError
}

export type IGetForecastActions = 
  IGetForecastStartAction
  | IGetForecastSuccessAction
  | IGetForecastFailureAction