import { actions } from '../actions/dailyWeather'

export const getDailyWeatherRequest = (payload) => ({
  type: actions.GET_DAILY_WEATHER,
  payload,
})

export const getDailyWeatherSuccess = (payload) => ({
  type: actions.GET_DAILY_WEATHER_SUCCESS,
  payload,
})

export const getDailyWeatherError = (payload) => ({
  type: actions.GET_DAILY_WEATHER_ERROR,
  payload,
})

export const setActiveDay = (payload) => ({
  type: actions.SET_ACTIVE_DAY,
  payload,
})

export const setCoordsBySearch = (payload) => {
  return {
    type: actions.SET_COORDS_BY_SEARCH,
    payload,
  }
}
