const setLocation = (location) => {
  debugger
  return {
    type: 'SET_LOCATION',
    payload: { ...location },
  }
}

export const getLocation = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        dispatch(
          setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          })
        ),
      () => {
        dispatch(
          setLocation({
            lat: 55.751244,
            long: 37.618423,
          })
        )
      }
    )
  }
}
