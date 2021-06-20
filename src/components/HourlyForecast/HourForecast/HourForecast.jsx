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
import humidity from '../../../assets/icons/humidity.svg';
import windSvg from '../../../assets/icons/wind.svg';

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
      <StyledPrecipitation humidity={humidity}>
        {`${precipitation}%`}
      </StyledPrecipitation>
      <StyledWind wind={windSvg}>{`${wind} km/h`}</StyledWind>
      <StyledTime>
        {time === '00' ? '12' : time}
        {time < 12 ? ' am' : ' pm'}
      </StyledTime>
    </StyledHourForecast>
  );
};

export default HourForecast;
