import { applyMiddleware, combineReducers, createStore } from 'redux'
import currentWeather from './reducers/currentWeather'
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({
  currentWeather,
})

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default store
