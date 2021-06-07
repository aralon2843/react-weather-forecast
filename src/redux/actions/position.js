export const setPosition = (location) => {
  return {
    type: 'SET_POSITION',
    payload: { ...location },
  }
}

export const getPosition = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        dispatch(
          setPosition({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        ),
      () => {
        dispatch(
          setPosition({
            lat: 55.751244,
            lon: 37.618423,
          })
        )
      }
    )

  }
}
