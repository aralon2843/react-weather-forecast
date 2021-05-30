const initialState = {
  hours: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_HOURLY_WEATHER':
      return {
        ...state,
        hours: payload.hours.list,
      }
    default:
      return state
  }
}
