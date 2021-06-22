import { actions } from '../actions/position'

const initialState = {
  lat: null,
  lon: null,
}

const Position = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_POSITION:
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
