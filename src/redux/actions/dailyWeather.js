import API from '../../services/api'

const setDailyWeather = (data) => {
  return {
    type: 'SET_DAILY_WEATHER',
    payload: {
      ...data,
    },
  }
}

const setLoad = (isLoad) => {
  return {
    type: 'SET_LOAD',
    payload: {
      isLoad,
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
      dispatch(setLoad(false))
      dispatch(setDailyWeather(data))
      dispatch(setLoad(true))
    })
  }
}
