import React from 'react'
import {
  StyledDate,
  StyledDayForecast,
  StyledImage,
  StyledTemperature,
} from './Styles'

function DayForecast(props) {
  return (
    <StyledDayForecast
      className={props.active ? 'active' : ''}
      onClick={() => props.onDayClick()}>
      <StyledDate>Fri 28</StyledDate>
      <StyledImage src='https://image.flaticon.com/icons/png/512/869/869869.png'></StyledImage>
      <StyledTemperature>
        20° <span>14°</span>
      </StyledTemperature>
      <p>Mostly rain</p>
    </StyledDayForecast>
  )
}

export default DayForecast
