import API from '../../services/api'

const setHourlyWeather = (data) => {
  return {
    type: 'SET_HOURLY_WEATHER',
    payload: {
      hours: data,
    },
  }
}

export const getHourlyWeather = (lat, lon) => {
  return (dispatch) => {
    API.getHourlyWeather(lat, lon).then((data) => {
      dispatch(setHourlyWeather(data))
    })
  }
}
