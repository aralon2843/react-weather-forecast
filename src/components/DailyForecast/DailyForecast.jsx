import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Flex from '../../common/Flex';
import {
  getDailyWeather,
  setActiveDay
} from '../../redux/actions/dailyWeather';
import DayForecast from './DayForecast/DayForecast';
import DayForecastLoader from './DayForecast/DayForecastLoader';
import { StyledDailyForecast, StyledTitle, StyledWrapper } from './Styles';

const DailyForecast = memo(() => {
  const dispatch = useDispatch();

  const onDayClickHandler = (day) => (_event) =>
    dispatch(setActiveDay(new Date(day.dt * 1000).toDateString()));

  const days = useSelector(({ dailyWeather }) => dailyWeather.days);
  const activeDay = useSelector(
    ({ dailyWeather }) => dailyWeather.activeDay.date
  );

  const isLoaded = useSelector(({ dailyWeather }) => dailyWeather.isLoaded);

  const latBySearch = useSelector(({ dailyWeather: { coords } }) => coords.lat);
  const lonBySearch = useSelector(({ dailyWeather: { coords } }) => coords.lon);

  useEffect(() => {
    if (
      latBySearch &&
      latBySearch !== null &&
      lonBySearch &&
      lonBySearch !== null
    ) {
      dispatch(getDailyWeather(latBySearch, lonBySearch));
    }
  }, [dispatch, latBySearch, lonBySearch]);

  return (
    <StyledDailyForecast>
      <StyledTitle>Daily</StyledTitle>
      <StyledWrapper>
        <Flex justify="space-between">
          {isLoaded
            ? days?.slice(0, 5).map((day) => {
                const isActive =
                  activeDay === new Date(day.dt * 1000).toDateString();

                return (
                  <DayForecast
                    onDayClick={onDayClickHandler(day)}
                    active={isActive}
                    date={new Date(day.dt * 1000).toDateString().split(' ')}
                    icon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                    maxTemp={Math.ceil(day.temp.max)}
                    minTemp={Math.floor(day.temp.min)}
                    description={day.weather[0].description}
                    key={day.dt}
                  />
                );
              })
            : Array(5).fill(<DayForecastLoader />)}
        </Flex>
      </StyledWrapper>
    </StyledDailyForecast>
  );
});

export default DailyForecast;
