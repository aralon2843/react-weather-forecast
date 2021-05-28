import styled from 'styled-components'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import DailyForecast from './components/DailyForecast/DailyForecast'
import Details from './components/Details/Details'
import HourlyForecast from './components/HourlyForecast/HourlyForecast'

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background-color: #262626;
  padding: 0px 15px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

const App = () => {
  return (
    <Wrapper>
      <Container>
        <CurrentWeather />
        <DailyForecast />
        <HourlyForecast />
        <Details />
      </Container>
    </Wrapper>
  )
}

export default App
