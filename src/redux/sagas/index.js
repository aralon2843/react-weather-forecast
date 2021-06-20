import { all } from 'redux-saga/effects';
import { watchGetCurrentWeather } from './currentWeatherSaga';

export default function* rootSaga() {
  yield all([watchGetCurrentWeather()]); // [watchSome1(), watchSome2()]
}
