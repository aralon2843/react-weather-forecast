import React from 'react'
import {
  StyledHourForecast,
  StyledPrecipitation,
  StyledTime,
  StyledWind,
  StyledDescription,
  StyledTemperature,
  StyledImage,
} from './Styles'

function HourForecast(props) {
  return (
    <StyledHourForecast>
      <StyledImage src={props.icon}></StyledImage>
      <StyledTemperature>{props.temperature}°</StyledTemperature>
      <StyledDescription>{props.description}</StyledDescription>
      <StyledPrecipitation>{props.precipitation}%</StyledPrecipitation>
      <StyledWind>{props.wind} km/h</StyledWind>
      <StyledTime>
        {props.time === '00' ? '12' : props.time}{' '}
        {props.time < 12 ? 'am' : 'pm'}
      </StyledTime>
    </StyledHourForecast>
  )
}

export default HourForecast
