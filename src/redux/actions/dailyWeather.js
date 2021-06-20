import API from '../../services/api';

const setDailyWeather = (data) => ({
  type: 'SET_DAILY_WEATHER',
  payload: { ...data }
});

const setLoad = (isLoaded) => ({
  type: 'SET_LOAD',
  payload: { isLoaded }
});

export const setActiveDay = (day) => ({
  type: 'SET_ACTIVE_DAY',
  payload: { date: day }
});

export const setCoordsBySearch = (coords) => ({
  type: 'SET_COORDS_BY_SEARCH',
  payload: {
    lat: coords.lat,
    lon: coords.lon
  }
});

export const getDailyWeather = (lat, lon, city) => {
  return (dispatch) => {
    dispatch(setLoad(false));

    API.getDailyWeather(lat, lon, city).then((data) => {
      dispatch(setDailyWeather(data));
    });

    dispatch(setLoad(true));
  };
};
