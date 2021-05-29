import API from '../../services/api'

const setDailyWeather = (data) => {
  return {
    type: 'SET_DAILY_WEATHER',
    payload: {
      ...data,
    },
  }
}
export const setActiveDay = (day) => {
  return {
    type: 'SET_ACTIVE_DAY',
    payload: {
      date: day
    },
  }
}

export const getDailyWeather = (lat, lon) => {
  return (dispatch) => {
    API.getDailyWeather(lat, lon).then((data) => {
      dispatch(setDailyWeather(data))
    })
  }
}
