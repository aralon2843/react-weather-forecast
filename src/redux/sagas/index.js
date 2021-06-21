import { all } from 'redux-saga/effects';
import { watchGetCurrentWeather } from './currentWeatherSaga';
import { watchGetDailyWeather } from './dailyWeatherSaga';

export default function* rootSaga() {
  yield all([watchGetCurrentWeather(), watchGetDailyWeather()]); // [watchSome1(), watchSome2()]
}
