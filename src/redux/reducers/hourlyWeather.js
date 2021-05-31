const initialState = {
  hours: [],
  isLoad: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_HOURLY_WEATHER':
      return {
        ...state,
        hours: payload.hours.list,
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
