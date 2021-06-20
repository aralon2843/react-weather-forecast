import API from '../../services/api';

const setHourlyWeather = (data) => {
  return {
    type: 'SET_HOURLY_WEATHER',
    payload: {
      hours: data
    }
  };
};

const setLoad = (isLoaded) => {
  return {
    type: 'SET_LOAD',
    payload: {
      isLoaded
    }
  };
};

export const getHourlyWeather = (lat, lon, city) => {
  return (dispatch) => {
    dispatch(setLoad(false));
    API.getHourlyWeather(lat, lon, city).then((data) => {
      dispatch(setHourlyWeather(data));
    });
    dispatch(setLoad(true));
  };
};
