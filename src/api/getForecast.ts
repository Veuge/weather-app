import axios from "./axios-config";

const PATH = "forecast";

interface IMain {
  temp: number;
  min: number;
  max: number;
  humidity: number;
  pressure: number;
}

interface IWeather {
  id: number,
  main: string,
  description: string
}

interface ICity {
  id: number;
  name: string;
  country: string;
}

interface IForecast {
  timestamp: number;
  main: IMain;
  weather: IWeather
}

interface IForecastResponse {
  cod: number;
  forecast: IForecast[];
  city: ICity;
}

interface IForecastErrorResponse {
  cod: number;
  message: string
}

// TODO formalize response type.
const getForecastWs = (params: any):Promise<IForecastResponse|IForecastErrorResponse> => axios.request({
  url: PATH,
  params,
  transformResponse: [(stringData): IForecastResponse => {
    const data = JSON.parse(stringData);
    if(data.cod === "404") {
      return {
        cod: data.cod,
        message: data.message
      }
    }
    return {
      cod: data.cod,
      city: {
        id: data.city.id || 0,
        name: data.city.name,
        country: data.city.country
      },
      forecast: data.list.map((f): IForecast => ({
        timestamp: f.dt,
        main: {
          temp: f.main.temp,
          min: f.main.temp_min,
          max: f.main.temp_max,
          pressure: f.main.pressure,
          humidity: f.main.humidity
        },
        weather: {
          id: f.weather[0].id,
          main: f.weather[0].main,
          description: f.weather[0].description
        }
      }))
    };
  }]
});

export {
  getForecastWs,
  IForecast
};