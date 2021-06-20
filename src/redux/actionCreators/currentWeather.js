import { actions } from '../actions/currentWeather';

export const getCurrentWeatherRequest = (payload) => ({
  type: actions.GET_CURRENT_WEATHER,
  payload
});

export const getCurrentWeatherSuccess = (payload) => ({
  type: actions.GET_CURRENT_WEATHER_SUCCESS,
  payload
});

export const getCurrentWeatherError = () => ({
  type: actions.GET_CURRENT_WEATHER_ERROR
});
