import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DailyForecast from './components/DailyForecast/DailyForecast'
import Details from './components/Details/Details'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import { getPosition } from './redux/actions/position'
import { getCurrentWeatherRequest } from './redux/actionCreators/currentWeather'
import { getHourlyWeather } from './redux/actions/hourlyWeather'
import Search from './components/Search/Search'
import { Wrapper, Container } from './appStyle'
import { getDailyWeatherRequest } from './redux/actionCreators/dailyWeather'

const App = memo(() => {
  const dispatch = useDispatch()

  const { lat, lon } = useSelector((state) => state.position, shallowEqual)

  const searchValue = useSelector((state) => state.search.searchCity)

  const getWeatherByPosition = () => {
    // refactored on redux-sagas
    dispatch(getCurrentWeatherRequest({ lat, lon }))
    dispatch(getDailyWeatherRequest({lat, lon}))
    dispatch(getHourlyWeather(lat, lon))
  }

  const getWeatherBySearch = (searchValue) => {
    dispatch(getCurrentWeatherRequest({ lat: null, lon: null, searchValue }))
    dispatch(getHourlyWeather(null, null, searchValue))
  }

  useEffect(() => {
    dispatch(getPosition())
    if (lat && lon && searchValue === null) {
      getWeatherByPosition()
    }
    if (searchValue !== null) {
      getWeatherBySearch(searchValue)
    }
  })

  return (
    <Wrapper>
      <Container>
        <CurrentWeather />
        <Search />
        <DailyForecast />
        <HourlyForecast />
        <Details />
      </Container>
    </Wrapper>
  )
})

export default App
