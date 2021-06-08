import API from '../../services/api'
import { setCoordsBySearch } from './dailyWeather'
import { setResponse } from './search'

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
    dispatch(setLoad(false))
    API.getCurrentWeather(lat, lon, city).then((data) => {
      if (data !== 404) {
        dispatch(setCurrentWeather(data))
        dispatch(setCoordsBySearch(data.coord))
        dispatch(setResponse(true))
      } else {
        dispatch(setResponse(false))
      }
    })
    dispatch(setLoad(true))
  }
}
