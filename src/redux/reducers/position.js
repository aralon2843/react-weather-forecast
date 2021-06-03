const initialState = {
  lat: null,
  lon: null,
}

const Position = (state = initialState, { type, payload }) => {
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

export default Position
