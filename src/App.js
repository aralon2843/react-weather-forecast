import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DailyForecast from './components/DailyForecast/DailyForecast'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import { getCurrentWeatherRequest } from './redux/actionCreators/currentWeather'
import Search from './components/Search/Search'
import { Wrapper, Container } from './appStyle'
import { getDailyWeatherRequest } from './redux/actionCreators/dailyWeather'
import { getHourlyWeatherRequest } from './redux/actionCreators/hourlyWeather'
import { getPosition } from './redux/actionCreators/position'

const App = memo(() => {
  const dispatch = useDispatch()

  const { lat, lon } = useSelector((state) => state.position, shallowEqual)

  const searchValue = useSelector((state) => state.search.searchCity)

  const getWeatherByPosition = () => {
    dispatch(getCurrentWeatherRequest({ lat, lon }))
    dispatch(getDailyWeatherRequest({ lat, lon }))
    dispatch(getHourlyWeatherRequest({ lat, lon }))
  }

  const getWeatherBySearch = (searchValue) => {
    dispatch(getCurrentWeatherRequest({ lat: null, lon: null, searchValue }))
    dispatch(getHourlyWeatherRequest({ lat: null, lon: null, searchValue }))
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
      </Container>
    </Wrapper>
  )
})

export default App
