const initialState = {
  hours: [],
  isLoaded: false
};

const HourlyWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_HOURLY_WEATHER':
      return {
        ...state,
        hours: payload.hours.list
      };
    case 'SET_LOAD':
      return {
        ...state,
        isLoaded: payload.isLoaded
      };
    default:
      return state;
  }
};

export default HourlyWeather;
