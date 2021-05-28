const initialState = {
  lat: null,
  long: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOCATION':
      return {
        ...state,
        lat: payload.lat,
        long: payload.long,
      }
    default:
      return state
  }
}
