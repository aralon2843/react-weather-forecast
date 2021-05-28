import React from 'react'
import Flex from '../../common/Flex'
import HourForecast from './HourForecast/HourForecast'
import {
  StyledButton,
  StyledHourlyForecast,
  StyledTitle,
  StyledWrapper,
} from './Styles'

function HourlyForecast() {
  return (
    <StyledHourlyForecast>
      <Flex justify='space-between' align='center'>
        <StyledTitle>Hourly</StyledTitle>
        <Flex>
          <StyledButton>Summary</StyledButton>
          <StyledButton active>Details</StyledButton>
        </Flex>
      </Flex>
      <StyledWrapper>
        <Flex justify='space-between'>
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
          <HourForecast />
        </Flex>
      </StyledWrapper>
    </StyledHourlyForecast>
  )
}

export default HourlyForecast
