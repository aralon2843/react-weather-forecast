const initialState = {
  days: [],
  activeDay: {
    date: new Date().toDateString(),
  },
}

export default (state = initialState, { type, payload }) => {
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
    default:
      return state
  }
}
