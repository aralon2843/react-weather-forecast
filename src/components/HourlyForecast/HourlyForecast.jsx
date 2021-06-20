import Chart from './Chart/Chart';
import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import convertTime from '../../common/convertTime';
import Flex from '../../common/Flex';
import HourForecast from './HourForecast/HourForecast';
import {
  StyledButton,
  StyledHourlyForecast,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
  StyledForecastLine
} from './Styles';
import Loader from '../../common/Loader/Loader';

const HourlyForecast = memo(() => {
  const activeDay = useSelector((state) => state.dailyWeather.activeDay.date);

  const isLoaded = useSelector((state) => state.hourlyWeather.isLoaded);

  const hourlyForecast = useSelector((state) => state.hourlyWeather.hours);

  const currentDayHourlyForecast = hourlyForecast.filter(
    (hour) => new Date(hour.dt * 1000).toDateString() === activeDay
  );

  const [activeButton, setActiveButton] = useState('Details');

  const onSummaryClick = () => setActiveButton('Summary');

  const onDetailsClick = () => setActiveButton('Details');

  return (
    <StyledHourlyForecast>
      <Flex justify="space-between" align="center">
        <StyledTitle>Every 3 hours</StyledTitle>
        <Flex>
          <StyledButton
            active={activeButton === 'Summary'}
            onClick={onSummaryClick}
          >
            Summary
          </StyledButton>
          <StyledButton
            active={activeButton === 'Details'}
            onClick={onDetailsClick}
          >
            Details
          </StyledButton>
        </Flex>
      </Flex>
      <StyledWrapper>
        {isLoaded ? (
          currentDayHourlyForecast.length > 0 ? (
            activeButton === 'Details' ? (
              <StyledForecastLine
                isLoaded={isLoaded}
                justify={
                  currentDayHourlyForecast.length < 6
                    ? 'start'
                    : 'space-between'
                }
              >
                {currentDayHourlyForecast.map((hour) => (
                  <HourForecast
                    icon={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    temperature={Math.round(hour.main.temp)}
                    description={hour.weather[0].description}
                    precipitation={hour.main.humidity}
                    wind={Math.round(hour.wind.speed)}
                    time={convertTime(hour.dt).substring(0, 2)}
                    key={hour.dt}
                  />
                ))}
              </StyledForecastLine>
            ) : (
              <Chart
                data={currentDayHourlyForecast.map((hour) => ({
                  time: convertTime(hour.dt).substring(0, 2),
                  temperature: hour.main.temp
                }))}
              />
            )
          ) : (
            <StyledSubtitle>
              Sorry, no weather for the next 3 hours
            </StyledSubtitle>
          )
        ) : (
          <Loader />
        )}
      </StyledWrapper>
    </StyledHourlyForecast>
  );
});

export default HourlyForecast;
