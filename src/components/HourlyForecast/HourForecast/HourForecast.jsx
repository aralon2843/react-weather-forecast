import React from 'react'
import {
  StyledHourForecast,
  StyledPrecipitaion,
  StyledTime,
  StyledWind,
  StyledDescription,
  StyledTemperature,
  StyledImage,
} from './Styles'

function HourForecast() {
  return (
    <StyledHourForecast>
      <StyledImage src='https://image.flaticon.com/icons/png/512/869/869869.png'></StyledImage>
      <StyledTemperature>24°</StyledTemperature>
      <StyledDescription>Mostly cloudy</StyledDescription>
      <StyledPrecipitaion>9%</StyledPrecipitaion>
      <StyledWind>12 km/h</StyledWind>
      <StyledTime>3pm</StyledTime>
    </StyledHourForecast>
  )
}

export default HourForecast
