import { applyMiddleware, combineReducers, createStore } from 'redux'
import currentWeather from './reducers/currentWeather'
import position from './reducers/position'
import ReduxThunk from 'redux-thunk'
import dailyWeather from './reducers/dailyWeather'
import hourlyWeather from './reducers/hourlyWeather'
import search from './reducers/search'

const reducers = combineReducers({
  currentWeather,
  position,
  dailyWeather,
  hourlyWeather,
  search,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

window.store = store

export default store
