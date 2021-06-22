import { actions } from '../actions/hourlyWeather'

export const getHourlyWeatherRequest = (payload) => ({
  type: actions.GET_HOURLY_WEATHER,
  payload,
})

export const getHourlyWeatherSuccess = (payload) => ({
  type: actions.GET_HOURLY_WEATHER_SUCCESS,
  payload,
})

export const getHourlyWeatherError = (payload) => ({
  type: actions.GET_HOURLY_WEATHER_ERROR,
  payload,
})
