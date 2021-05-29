import API from '../../services/api'

const setCurrentWeather = (data) => {
  return {
    type: 'SET_CURRENT_WEATHER',
    payload: {
      ...data,
    },
  }
}

export const getCurrentWeather = (lat, lon) => {
  return (dispatch) => {
    API.getCurrentWeather(lat, lon).then((data) => {
      dispatch(setCurrentWeather(data))
    })
  } 
}
