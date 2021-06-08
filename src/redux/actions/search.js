export const setSearchCity = (searchCity) => {
  return {
    type: 'SET_SEARCH_CITY',
    payload: {
      searchCity,
    },
  }
}

export const setResponse = (isResponseSuccessful) => {
  return {
    type: 'SET_RESPONSE',
    payload: {
      isResponseSuccessful,
    },
  }
}
