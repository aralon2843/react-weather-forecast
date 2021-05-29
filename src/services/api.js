import axios from "axios"

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
})

const API = {
  getCurrentWeather: (lat, lon) => {
    return axiosInstance.get(`weather?lat=${lat}&lon=${lon}&units=metric&appid=34f0fb637a40be39e56e907408b59746`).then(response => response.data)
  }
}
export default API