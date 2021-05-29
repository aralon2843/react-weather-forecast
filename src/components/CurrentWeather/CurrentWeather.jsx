import React from 'react'
import { useSelector } from 'react-redux'
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
  const {
    country,
    city,
    description,
    feelsLike,
    icon,
    temperature,
    visibility,
    wind,
  } = useSelector((state) => state.currentWeather)
  return (
    <StyledCurrentWeather>
      <StyledLocation>{city}, {country}</StyledLocation>
      <Flex align='center' justify='space-around'>
        <StyledWeatherIcon src={icon} alt='weather icon'/>
        <StyledTemperature>{Math.ceil(temperature)}°</StyledTemperature>
      </Flex>
      <StyledDescription>{description}</StyledDescription>
      <CurrentWeatherDetails>
        <span>Feels like {Math.ceil(feelsLike)}°</span>
        <span>Wind {Math.ceil(wind)} km\h</span>
        <span>Visibility {visibility / 1000} km</span>
      </CurrentWeatherDetails>
    </StyledCurrentWeather>
  )
}

export default CurrentWeather
