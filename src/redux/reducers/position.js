const initialState = {
  lat: null,
  lon: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_POSITION':
      return {
        ...state,
        lat: payload.lat,
        lon: payload.lon,
      }
    default:
      return state
  }
}
