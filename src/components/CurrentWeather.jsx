import React from 'react'
import styled from 'styled-components'
import Flex from '../common/Flex'

const StyledCurrentWeather = styled.div`
  text-align: center;
  max-width: 270px;
  margin: 0px auto;
  margin-top: 25px;
  margin-bottom: 60px;
`
const StyledLocation = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`

const StyledTemperature = styled.p`
  font-size: 72px;
  font-weight: 200;
  margin-bottom: 15px;
`

const StyledWeatherIcon = styled.img`
  object-fit: cover;
  object-position: center;
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`

const StyledDescription = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`

const CurrentWeatherDetails = styled.div`
  font-size: 12px;
  & span {
    margin-right: 7px;
  }
  & span:last-child {
    margin-right: 0px;
  }
`

function CurrentWeather() {
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
