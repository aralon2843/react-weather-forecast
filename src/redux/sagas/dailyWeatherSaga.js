import { call, put, takeLatest } from 'redux-saga/effects'
import API from '../../services/api'
import {
  getDailyWeatherError,
  getDailyWeatherSuccess,
} from '../actionCreators/dailyWeather'
import { actions } from '../actions/dailyWeather'

export function* watchGetDailyWeather() {
  yield takeLatest(actions.GET_DAILY_WEATHER, doGetDailyWeather)
}

const fetchDailyWeather = ({ lat, lon, searchValue }) => {
  return API.getDailyWeather(lat, lon, searchValue)
}

function* doGetDailyWeather(action) {
  const { payload } = action
  try {
    const response = yield call(fetchDailyWeather, {
      lat: payload.lat || payload.latBySearch,
      lon: payload.lon || payload.lonBySearch,
    })
    yield put(getDailyWeatherSuccess(response))
  } catch {
    yield put(getDailyWeatherError())
  }
}
