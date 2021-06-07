import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DailyForecast from './components/DailyForecast/DailyForecast'
import Details from './components/Details/Details'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'
import { getPosition } from './redux/actions/position'
import background from './assets/images/background.jpg'
import { getCurrentWeather } from './redux/actions/currentWeather'
import { getDailyWeather } from './redux/actions/dailyWeather'
import { getHourlyWeather } from './redux/actions/hourlyWeather'
import Search from './components/Search/Search'

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background: url(${background}) top/cover no-repeat;
  padding: 0px 15px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const App = memo(() => {
  const dispatch = useDispatch()

  const { lat, lon } = useSelector((state) => state.position, shallowEqual)

  const searchValue = useSelector((state) => state.search.searchCity)

  const getWeatherByPosition = () => {
    dispatch(getCurrentWeather(lat, lon))
    dispatch(getDailyWeather(lat, lon))
    dispatch(getHourlyWeather(lat, lon))
  }

  const getWeatherBySearch = (searchValue) => {
    dispatch(getCurrentWeather(null, null, searchValue))
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
