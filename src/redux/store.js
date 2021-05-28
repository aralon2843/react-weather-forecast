import { applyMiddleware, combineReducers, createStore } from 'redux'
import currentWeather from './reducers/currentWeather'
import location from './reducers/location'
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({
  currentWeather,
  location,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

window.store = store

export default store
