import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
})

const API = {
  getCurrentWeather: (lat, lon, city = null) => {
    console.log(lon, lat, city)
    return axiosInstance
      .get(
        `weather?${
          lat !== null && lon !== null ? 'lat=' + lat + `&lon=` + lon : ''
        }${
          city !== null ? `&q=` + city : ''
        }&units=metric&appid=34f0fb637a40be39e56e907408b59746`
      )
      .then((response) => response.data)
  },
  getDailyWeather: (lat, lon) => {
    console.log(lon, lat)
    return axiosInstance
      .get(
        `onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts,current&units=metric&appid=34f0fb637a40be39e56e907408b59746`
      )
      .then((response) => response.data)
  },
  getHourlyWeather: (lat, lon, city = null) => {
    console.log(lon, lat, city)
    return axiosInstance
      .get(
        `forecast?${
          lat !== null && lon !== null ? 'lat=' + lat + `&lon=` + lon : ''
        }${
          city !== null && city ? `q=` + city : ''
        }&units=metric&appid=34f0fb637a40be39e56e907408b59746`
      )
      .then((response) => response.data)
  },
}
export default API
