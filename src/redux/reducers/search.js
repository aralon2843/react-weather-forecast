const initialState = {
  searchCity: null,
}

const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SEARCH_CITY':
      return {
        ...state,
        searchCity: payload.searchCity,
      }
    default:
      return state
  }
}

export default search
