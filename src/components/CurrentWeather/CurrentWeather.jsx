import React from 'react'
import { useSelector } from 'react-redux'
import Flex from '../../common/Flex'
import CurrentWeatherLoader from './CurrentWeatherLoader'
import {
  CurrentWeatherDetails,
  StyledCurrentWeather,
  StyledDescription,
  StyledLocation,
  StyledTemperature,
  StyledWeatherIcon,
  FeelsLike,
  Wind,
  Visibility,
} from './Styles'

import feelsLikeIcon from '../../assets/icons/thermometer.svg'
import windIcon from '../../assets/icons/wind.svg'
import visibilityIcon from '../../assets/icons/witness.svg'

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
    isLoaded,
  } = useSelector(({ currentWeather }) => currentWeather)

  return (
    <StyledCurrentWeather>
      {isLoaded ? (
        <>
          <StyledLocation>
            {city}, {country}
          </StyledLocation>
          <Flex align='center' justify='space-around'>
            <StyledWeatherIcon
              src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
              alt='weather icon'
            />
            <StyledTemperature>{Math.round(temperature)}°</StyledTemperature>
          </Flex>
          <StyledDescription>{description}</StyledDescription>
          <CurrentWeatherDetails>
            <FeelsLike icon={feelsLikeIcon}>
              <div>Feels like</div> <div>{Math.round(feelsLike)}°</div>
            </FeelsLike>
            <Wind icon={windIcon}>
              <div>Wind</div> {Math.round(wind)} km\h
            </Wind>
            <Visibility icon={visibilityIcon}>
              <div>Visibility</div> {visibility / 1000} km
            </Visibility>
          </CurrentWeatherDetails>
        </>
      ) : (
        <CurrentWeatherLoader />
      )}
    </StyledCurrentWeather>
  )
}

export default CurrentWeather
