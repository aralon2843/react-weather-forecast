import { all } from 'redux-saga/effects'
import { watchGetCurrentWeather } from './currentWeatherSaga'
import { watchGetDailyWeather } from './dailyWeatherSaga'
import { watchGetHourlyWeather } from './hourlyWeatherSaga'

export default function* rootSaga() {
  yield all([
    watchGetCurrentWeather(),
    watchGetDailyWeather(),
    watchGetHourlyWeather(),
  ])
}
