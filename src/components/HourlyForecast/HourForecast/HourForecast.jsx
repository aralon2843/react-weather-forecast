import React from 'react';
import {
  StyledHourForecast,
  StyledPrecipitation,
  StyledTime,
  StyledWind,
  StyledDescription,
  StyledTemperature,
  StyledImage
} from './Styles';
import humidityIcon from '../../../assets/icons/humidity.svg';
import windIcon from '../../../assets/icons/wind.svg';

const HourForecast = ({
  icon,
  temperature,
  description,
  precipitation,
  wind,
  time
}) => {
  return (
    <StyledHourForecast>
      <StyledImage src={icon}></StyledImage>
      <StyledTemperature>{temperature}°</StyledTemperature>
      <StyledDescription>{description}</StyledDescription>
      <StyledPrecipitation icon={humidityIcon}>
        {`${precipitation}%`}
      </StyledPrecipitation>
      <StyledWind icon={windIcon}>{`${wind} km/h`}</StyledWind>
      <StyledTime>
        {time === '00' ? '12' : time}
        {time < 12 ? ' am' : ' pm'}
      </StyledTime>
    </StyledHourForecast>
  );
};

export default HourForecast;
