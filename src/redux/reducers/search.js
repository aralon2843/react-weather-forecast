import { actions } from '../actions/search'

const initialState = {
  searchCity: null,
}

const Search = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SET_SEARCH_CITY:
      return {
        ...state,
        searchCity: payload,
      }
    default:
      return state
  }
}

export default Search
