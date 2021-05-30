import React from 'react'
import { useSelector } from 'react-redux'
import convertTime from '../../common/convertTime'
import Flex from '../../common/Flex'
import HourForecast from './HourForecast/HourForecast'
import {
  StyledButton,
  StyledHourlyForecast,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './Styles'

function HourlyForecast(props) {
  const hourlyForecast = useSelector((state) => state.hourlyWeather.hours)

  const currentDayHourlyForecast = hourlyForecast.filter(
    (hour) => new Date(hour.dt * 1000).toDateString() === props.activeDay
  )

  return (
    <StyledHourlyForecast>
      <Flex justify='space-between' align='center'>
        <StyledTitle>Every 3 hours</StyledTitle>
        <Flex>
          <StyledButton>Summary</StyledButton>
          <StyledButton active>Details</StyledButton>
        </Flex>
      </Flex>
      <StyledWrapper>
        {currentDayHourlyForecast.length > 0 ? <Flex justify='space-between'>
          {currentDayHourlyForecast.map((hour) => (
            <HourForecast
              icon={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              temperature={Math.round(hour.main.temp)}
              description={hour.weather[0].description}
              precipitation={hour.main.humidity}
              wind={Math.round(hour.wind.speed)}
              time={convertTime(hour.dt).substring(0, 2)}
              key={hour.dt}
            />
          ))}
        </Flex> : <StyledSubtitle>Sorry, no weather for the next 3 hours</StyledSubtitle>}
      </StyledWrapper>
    </StyledHourlyForecast>
  )
}

export default HourlyForecast
