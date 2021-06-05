export const setSearchCountry = (searchCountry) => {
  return {
    type: 'SET_SEARCH_COUNTRY',
    payload: {
      searchCountry,
    },
  }
}
