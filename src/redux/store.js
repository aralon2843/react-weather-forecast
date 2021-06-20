import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/';
import { composeWithDevTools } from 'redux-devtools-extension';
import currentWeather from './reducers/currentWeather';
import position from './reducers/position';
import ReduxThunk from 'redux-thunk';
import dailyWeather from './reducers/dailyWeather';
import hourlyWeather from './reducers/hourlyWeather';
import search from './reducers/search';

const reducers = combineReducers({
  currentWeather,
  position,
  dailyWeather,
  hourlyWeather,
  search
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, ReduxThunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
