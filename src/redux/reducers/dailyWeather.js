import { actions } from '../actions/dailyWeather'

const initialState = {
  days: [],
  activeDay: {
    date: new Date().toDateString(),
  },
  coords: {
    lat: null,
    lon: null,
  },
  isLoaded: false,
  error: false,
}

const DailyWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_DAILY_WEATHER:
      return {
        ...state,
        isLoaded: false,
      }
    case actions.GET_DAILY_WEATHER_SUCCESS:
      return {
        ...state,
        days: [...payload.daily],
        error: false,
        isLoaded: true,
      }
    case actions.GET_DAILY_WEATHER_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: true,
      }
    case actions.SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: {
          date: payload,
        },
      }
    case actions.SET_COORDS_BY_SEARCH: {
      return {
        ...state,
        coords: {
          lat: payload.lat,
          lon: payload.lon,
        },
      }
    }
    default:
      return state
  }
}

export default DailyWeather
