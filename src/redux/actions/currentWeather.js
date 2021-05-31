import API from '../../services/api'

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

export const getCurrentWeather = (lat, lon) => {
  return (dispatch) => {
    API.getCurrentWeather(lat, lon).then((data) => {
      dispatch(setLoad(false))
      dispatch(setCurrentWeather(data))
      dispatch(setLoad(true))
    })
  }
}
