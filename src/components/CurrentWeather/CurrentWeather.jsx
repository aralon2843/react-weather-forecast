import React from 'react'
import Flex from '../../common/Flex'
import {
  CurrentWeatherDetails,
  StyledCurrentWeather,
  StyledDescription,
  StyledLocation,
  StyledTemperature,
  StyledWeatherIcon,
} from './Styles'

const CurrentWeather = () => {
  return (
    <StyledCurrentWeather>
      <StyledLocation>{`${'Луганск'}, ${'Украина'}`}</StyledLocation>
      <Flex align='center' justify='space-around'>
        <StyledWeatherIcon src='https://image.flaticon.com/icons/png/512/869/869869.png' />
        <StyledTemperature>18°</StyledTemperature>
      </Flex>
      <StyledDescription>Cloudy</StyledDescription>
      <CurrentWeatherDetails>
        <span>Feels like 14°</span>
        <span>Wind 14 km\h</span>
        <span>Visibility 20 km</span>
      </CurrentWeatherDetails>
    </StyledCurrentWeather>
  )
}

export default CurrentWeather
