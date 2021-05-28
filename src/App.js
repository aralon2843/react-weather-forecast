import styled from 'styled-components'
import CurrentWeather from './components/CurrentWeather'
import DailyForecast from './components/DailyForecast'


const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #262626;
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
      </Container>
    </Wrapper>
  )
}

export default App
