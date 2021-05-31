import React, { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../../common/Flex'
import { setActiveDay } from '../../redux/actions/dailyWeather'
import DayForecast from './DayForecast/DayForecast'
import { StyledDailyForecast, StyledTitle, StyledWrapper } from './Styles'

const DailyForecast = memo((props) => {
  const dispatch = useDispatch()

  const onDayClick = useCallback((day) => {
    dispatch(setActiveDay(new Date(day.dt * 1000).toDateString()))
  })
  const days = useSelector((state) => state.dailyWeather.days)
  const activeDay = useSelector((state) => state.dailyWeather.activeDay.date)

  return (
    <StyledDailyForecast>
      <StyledTitle>Daily</StyledTitle>
      <StyledWrapper>
        <Flex justify='space-between'>
          {days.slice(0, 5).map((day) => (
            <DayForecast
              onDayClick={() => onDayClick(day)}
              active={
               activeDay.date === new Date(day.dt * 1000).toDateString()
                  ? true
                  : false
              }
              date={new Date(day.dt * 1000).toDateString().split(' ')}
              icon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              maxTemp={Math.ceil(day.temp.max)}
              minTemp={Math.floor(day.temp.min)}
              description={day.weather[0].description}
              key={day.dt}
            />
          ))}
        </Flex>
      </StyledWrapper>
    </StyledDailyForecast>
  )
})

export default DailyForecast
