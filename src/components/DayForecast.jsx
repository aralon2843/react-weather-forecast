import React from 'react'
import styled from 'styled-components'

const StyledDayForecast = styled.div`
`
const StyledDate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 35px;
  height: 35px;
`

const StyledTemperature = styled.p`
  font-size: 24px;
  margin-top: 10px;
  & span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
  margin-bottom: 10px;
`

function DayForecast() {
  return (
    <StyledDayForecast>
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
