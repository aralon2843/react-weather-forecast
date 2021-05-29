import { applyMiddleware, combineReducers, createStore } from 'redux'
import currentWeather from './reducers/currentWeather'
import position from './reducers/position'
import ReduxThunk from 'redux-thunk'
import dailyWeather from './reducers/dailyWeather'

const reducers = combineReducers({
  currentWeather,
  position,
  dailyWeather,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

window.store = store

export default store
