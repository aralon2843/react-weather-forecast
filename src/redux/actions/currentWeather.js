import API from '../../services/api'
import { setCoordsBySearch } from './dailyWeather'

const setCurrentWeather = (data) => {
  return {
    type: 'SET_CURRENT_WEATHER',
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

export const getCurrentWeather = (lat, lon, city) => {
  return (dispatch) => {
    API.getCurrentWeather(lat, lon, city).then((data) => {
      dispatch(setLoad(false))
      dispatch(setCurrentWeather(data))
      dispatch(setCoordsBySearch(data.coord))
      dispatch(setLoad(true))
    })
  }
}
