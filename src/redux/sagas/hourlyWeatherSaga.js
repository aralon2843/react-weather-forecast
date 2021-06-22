import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from '../actions/hourlyWeather'
import API from '../../services/api'
import {
  getHourlyWeatherError,
  getHourlyWeatherSuccess,
} from '../actionCreators/hourlyWeather'

export function* watchGetHourlyWeather() {
  yield takeLatest(actions.GET_HOURLY_WEATHER, doGetHourlyWeather)
}

const fetchHourlyWeather = ({ lat, lon, searchValue }) => {
  return API.getHourlyWeather(lat, lon, searchValue)
}

function* doGetHourlyWeather(action) {
  const { payload } = action

  try {
    const response = yield call(fetchHourlyWeather, payload)
    yield put(getHourlyWeatherSuccess(response))
  } catch {
    yield put(getHourlyWeatherError())
  }
}
