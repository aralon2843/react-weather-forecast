import { actions } from '../actions/currentWeather';

const initialState = {
  country: null,
  city: null,
  temperature: null,
  icon: null,
  description: null,
  feelsLike: null,
  wind: null,
  visibility: null,
  isLoaded: false
};

const CurrentWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_CURRENT_WEATHER: {
      return {
        isLoaded: false
      };
    }

    case actions.GET_CURRENT_WEATHER_SUCCESS: {
      // return state.set(...state).set('isCurrentWeatherLoaded', true); // попробуй реализовать через state.set или state.update

      return {
        ...state,
        country: payload.sys.country,
        city: payload.name,
        temperature: payload.main.temp,
        icon: payload.weather[0].icon,
        description: payload.weather[0].description,
        feelsLike: payload.main.feels_like,
        wind: payload.wind.speed,
        visibility: payload.visibility,
        isLoaded: true
      };
    }

    case actions.GET_CURRENT_WEATHER_ERROR: {
      // return state.set('isCurrentWeatherLoaded', false);
      // return { isCurrentWeatherLoaded: false };
      return { isLoaded: false };
    }

    default:
      return state;
  }
};

export default CurrentWeather;
