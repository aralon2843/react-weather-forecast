const initialState = {
  country: null,
  city: null,
  temperature: null,
  icon: null,
  description: null,
  feelsLike: null,
  wind: null,
  visibility: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        country: payload.sys.country,
        city: payload.name,
        temperature: payload.main.temp,
        icon: `http://openweathermap.org/img/wn/${payload.weather[0].icon}@4x.png`,
        description: payload.weather[0].description,
        feelsLike: payload.main.feels_like,
        wind: payload.wind.speed,
        visibility: payload.visibility,
      }
    default:
      return state
  }
}
