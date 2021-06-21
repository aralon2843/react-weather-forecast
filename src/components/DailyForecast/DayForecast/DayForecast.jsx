import React from 'react'
import {
  StyledDate,
  StyledDayForecast,
  StyledDescription,
  StyledImage,
  StyledTemperature,
} from './Styles'

function DayForecast({
  active,
  date,
  icon,
  maxTemp,
  minTemp,
  description,
  onDayClick,
}) {
  const onClickHandler = () => onDayClick()

  return (
    <StyledDayForecast
      className={active ? 'active' : ''}
      onClick={onClickHandler}>
      <StyledDate>
        {date[0]} {date[2]}
      </StyledDate>
      <StyledImage src={icon}></StyledImage>
      <StyledTemperature>
        {maxTemp}° <span> {minTemp}°</span>
      </StyledTemperature>
      <StyledDescription>{description}</StyledDescription>
    </StyledDayForecast>
  )
}

export default DayForecast
