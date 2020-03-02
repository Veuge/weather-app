import { IRequestError } from "../../api/axios-config";

export const RETRIEVE_USER_PREFS = "RETRIEVE_USER_PREFS";
export const RETRIEVE_FAV_CITIES = "RETRIEVE_FAV_CITIES";
export const RETRIEVE_UNIT = "RETRIEVE_UNIT";
export const RETRIEVE_ERROR = "RETRIEVE_ERROR";

interface IRetrieveUserPrefs {
  type: typeof RETRIEVE_USER_PREFS;
};

interface IRetrieveFavCities {
  type: typeof RETRIEVE_FAV_CITIES;
  data: any;
};

interface IRetrieveUnit {
  type: typeof RETRIEVE_UNIT;
  data: string;
};

interface IRetrieveError {
  type: typeof RETRIEVE_ERROR;
  error: IRequestError;
}

export type IRetrievePrefsActions = 
  IRetrieveUserPrefs
  | IRetrieveFavCities
  | IRetrieveUnit
  | IRetrieveError

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