import React from 'react'
import { useState } from 'react'
import Flex from '../../common/Flex'
import DayForecast from './DayForecast/DayForecast'
import { StyledDailyForecast, StyledTitle, StyledWrapper } from './Styles'

function DailyForecast() {
  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [activeDay, setActiveDay] = useState(0)

  return (
    <StyledDailyForecast>
      <StyledTitle>Daily</StyledTitle>
      <StyledWrapper>
        <Flex justify='space-between'>
          {days.map((day, i) => (
            <DayForecast
              onDayClick={() => setActiveDay(i)}
              active={i === activeDay ? true : false}
            />
          ))}
        </Flex>
      </StyledWrapper>
    </StyledDailyForecast>
  )
}

export default DailyForecast
