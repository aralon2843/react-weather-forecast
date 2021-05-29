import React from 'react'
import {
  StyledDate,
  StyledDayForecast,
  StyledDescription,
  StyledImage,
  StyledTemperature,
} from './Styles'

function DayForecast(props) {
  return (
    <StyledDayForecast
      className={props.active ? 'active' : ''}
      onClick={() => props.onDayClick()}>
      <StyledDate>
        {props.date[0]} {props.date[2]}
      </StyledDate>
      <StyledImage src={props.icon}></StyledImage>
      <StyledTemperature>
        {props.maxTemp}° <span> {props.minTemp}°</span>
      </StyledTemperature>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledDayForecast>
  )
}

export default DayForecast
