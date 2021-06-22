import { actions } from '../actions/position'

export const setPosition = (payload) => ({
  type: actions.GET_POSITION,
  payload,
})

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
