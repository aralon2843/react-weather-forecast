const initialState = {
  days: [],
  activeDay: {
    date: new Date().toDateString()
  },
  coords: {
    lat: null,
    lon: null
  },
  isLoaded: false
};

const DailyWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DAILY_WEATHER':
      return {
        ...state,
        days: [...payload.daily]
      };
    case 'SET_ACTIVE_DAY':
      return {
        ...state,
        activeDay: {
          date: payload.date
        }
      };
    case 'SET_COORDS_BY_SEARCH': {
      return {
        ...state,
        coords: {
          lat: payload.lat,
          lon: payload.lon
        }
      };
    }
    case 'SET_LOAD':
      return {
        ...state,
        isLoaded: payload.isLoaded
      };
    default:
      return state;
  }
};

export default DailyWeather;
