import Chart from './Chart/Chart'
import React, { memo, useState } from 'react'
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
  StyledForecastLine,
} from './Styles'
import Loader from '../../common/Loader/Loader'

const HourlyForecast = memo((props) => {
  const activeDay = useSelector((state) => state.dailyWeather.activeDay.date)
  const isLoad = useSelector((state) => state.hourlyWeather.isLoad)
  const hourlyForecast = useSelector((state) => state.hourlyWeather.hours)
  const currentDayHourlyForecast = hourlyForecast.filter(
    (hour) => new Date(hour.dt * 1000).toDateString() === activeDay
  )

  const onSummaryClick = () => setActiveButton('Summary')

  const onDetailsClick = () => setActiveButton('Details')

  const [activeButton, setActiveButton] = useState('Details')

  return (
    <StyledHourlyForecast>
      <Flex justify='space-between' align='center'>
        <StyledTitle>Every 3 hours</StyledTitle>
        <Flex>
          <StyledButton
            active={activeButton === 'Summary' ? true : false}
            onClick={onSummaryClick}>
            Summary
          </StyledButton>
          <StyledButton
            active={activeButton === 'Details' ? true : false}
            onClick={onDetailsClick}>
            Details
          </StyledButton>
        </Flex>
      </Flex>
      <StyledWrapper>
        {isLoad ? (
          currentDayHourlyForecast.length > 0 ? (
            activeButton === 'Details' ? (
              <StyledForecastLine
                isLoad={isLoad}
                justify={
                  currentDayHourlyForecast.length < 6
                    ? 'start'
                    : 'space-between'
                }>
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
              </StyledForecastLine>
            ) : (
              <Chart
                data={currentDayHourlyForecast.map((hour) => ({
                  time: convertTime(hour.dt).substring(0, 2),
                  temperature: hour.main.temp,
                }))}
              />
            )
          ) : (
            <StyledSubtitle>
              Sorry, no weather for the next 3 hours
            </StyledSubtitle>
          )
        ) : (
          <Loader />
        )}
      </StyledWrapper>
    </StyledHourlyForecast>
  )
})

export default HourlyForecast
