const initialState = {
  searchCountry: null,
}

const search = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_SEARCH_COUNTRY':
      return {
        ...state,
        searchCountry: payload.searchCountry,
      }
    default:
      return state
  }
}

export default search
