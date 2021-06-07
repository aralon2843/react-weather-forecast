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
export const setCoordsBySearch = (coords) => {
  return {
    type: 'SET_COORDS_BY_SEARCH',
    payload: {
      lat: coords.lat,
      lon: coords.lon,
    },
  }
}
export const getDailyWeather = (lat, lon, city) => {
  return (dispatch) => {
    API.getDailyWeather(lat, lon, city).then((data) => {
      dispatch(setLoad(false))
      dispatch(setDailyWeather(data))
      dispatch(setLoad(true))
    })
  }
}
