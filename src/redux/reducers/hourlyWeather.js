import { actions } from '../actions/hourlyWeather'

const initialState = {
  hours: [],
  isLoaded: false,
  error: false,
}

const HourlyWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_HOURLY_WEATHER:
      return {
        ...state,
        isLoaded: false,
      }
    case actions.GET_HOURLY_WEATHER_SUCCESS:
      return {
        hours: payload.list,
        isLoaded: true,
        error: false,
      }
    case actions.GET_HOURLY_WEATHER_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: true,
      }
    default:
      return state
  }
}

export default HourlyWeather
