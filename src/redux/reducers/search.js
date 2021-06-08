const initialState = {
  searchCity: null,
  isResponseSuccessful: true,
}

const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SEARCH_CITY':
      return {
        ...state,
        searchCity: payload.searchCity,
      }
    case 'SET_RESPONSE':
      return {
        ...state,
        isResponseSuccessful: payload.isResponseSuccessful,
      }
    default:
      return state
  }
}

export default search
