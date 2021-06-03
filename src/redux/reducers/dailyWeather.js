const initialState = {
  days: [],
  activeDay: {
    date: new Date().toDateString(),
    isLoad: false,
  },
}

const DailyWeather = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_DAILY_WEATHER':
      return {
        ...state,
        days: [...payload.daily],
      }
    case 'SET_ACTIVE_DAY':
      return {
        ...state,
        activeDay: {
          date: payload.date,
        },
      }
    case 'SET_LOAD':
      return {
        ...state,
        isLoad: payload.isLoad,
      }
    default:
      return state
  }
}

export default DailyWeather
