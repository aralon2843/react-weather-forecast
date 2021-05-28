import React from 'react'
import styled from 'styled-components'
import Flex from '../common/Flex'
import DayForecast from './DayForecast'

const StyledDailyForecast = styled.div`
`
const StyledTitle = styled.h2`
  font-size: 18px;
`

function DailyForecast() {
  return (
    <StyledDailyForecast>
      <StyledTitle>Daily</StyledTitle>
      <Flex justify='space-between'>
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
        <DayForecast />
      </Flex>
    </StyledDailyForecast>
  )
}

export default DailyForecast
