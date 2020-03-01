import axios from "./axios-config";

const PATH = "forecast";

interface IMain {
  temp: Number;
  min: Number;
  max: Number;
  humidity: Number;
  pressure: Number;
}

interface IWeather {
  id: Number,
  main: String,
  description: String
}

interface ICity {
  id: Number;
  name: String;
  country: String;
}

interface IForecast {
  timestamp: Number;
  main: IMain;
  weather: IWeather
}

interface IForecastResponse {
  forecast: IForecast[];
  city: ICity;
}

// TODO formalize response type.
const getForecastWs = (query: String): Promise<IForecastResponse> => axios.request({
  url: PATH,
  params: {
    q: query
  },
  transformResponse: [(stringData): IForecastResponse => {
    const data = JSON.parse(stringData);
    return {
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
  getForecastWs
};