import { actions } from '../actions/currentWeather'

const initialState = {
  country: null,
  city: null,
  temperature: null,
  icon: null,
  description: null,
  feelsLike: null,
  wind: null,
  visibility: null,
  isLoaded: false,
  error: false,
}

const CurrentWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_CURRENT_WEATHER: {
      return {
        ...state,
        isLoaded: false,
      }
    }

    case actions.GET_CURRENT_WEATHER_SUCCESS: {
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
        error: false,
        isLoaded: true,
      }
    }

    case actions.GET_CURRENT_WEATHER_ERROR: {
      return { ...state, isLoaded: true, error: true }
    }

    default:
      return state
  }
}

export default CurrentWeather
