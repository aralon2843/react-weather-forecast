import { takeLatest, put, call } from 'redux-saga/effects'
import { actions } from '../actions/currentWeather'
import {
  getCurrentWeatherSuccess,
  getCurrentWeatherError,
} from '../actionCreators/currentWeather'
import API from '../../services/api'
import { setCoordsBySearch } from '../actionCreators/dailyWeather'

export function* watchGetCurrentWeather() {
  yield takeLatest(actions.GET_CURRENT_WEATHER, doGetCurrentWeather)
}

const fetchCurrentWeather = ({ lat, lon, searchValue }) => {
  return API.getCurrentWeather(lat, lon, searchValue)
}

function* doGetCurrentWeather(action) {
  const { payload } = action

  try {
    const response = yield call(fetchCurrentWeather, payload)
    yield put(getCurrentWeatherSuccess(response))
    yield put(setCoordsBySearch(response.coord))
  } catch ({ message }) {
    yield put(getCurrentWeatherError())
  }
}
