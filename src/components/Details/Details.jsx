import { memo } from 'react';
import { useSelector } from 'react-redux';
import convertTime from '../../common/convertTime';
import Flex from '../../common/Flex';
import DetailsLoader from './DetailsLoader';
import {
  StyledDetails,
  StyledMoon,
  StyledMoonrise,
  StyledSun,
  StyledSunrise,
  StyledTitle,
  StyledSunset,
  StyledMoonset,
  StyledDescription
} from './Styles';

const Details = memo((props) => {
  const activeDay = useSelector(
    ({ dailyWeather }) => dailyWeather.activeDay.date
  );

  const days = useSelector(({ dailyWeather }) => dailyWeather.days);
  const day = days.filter(
    (day) => new Date(day.dt * 1000).toDateString() === activeDay
  );
  const isLoaded = useSelector(({ currentWeather }) => currentWeather.isLoaded);

  const sunset = convertTime(day[0]?.sunset);
  const sunrise = convertTime(day[0]?.sunrise);
  const moonset = convertTime(day[0]?.moonset);
  const moonrise = convertTime(day[0]?.moonrise);

  return (
    <StyledDetails>
      <StyledTitle>Day Details</StyledTitle>
      <Flex>
        {isLoaded ? (
          <StyledSun>
            <div>
              <StyledDescription>Sunrise</StyledDescription>
              <StyledSunrise
                backgroundUrl={
                  'https://image.flaticon.com/icons/png/512/728/728123.png'
                }
              >
                {sunrise} AM
              </StyledSunrise>
            </div>
            <div>
              <StyledDescription>Sunset</StyledDescription>
              <StyledSunset
                backgroundUrl={
                  'https://image.flaticon.com/icons/png/512/728/728124.png'
                }
              >
                {sunset} PM
              </StyledSunset>
            </div>
          </StyledSun>
        ) : (
          <DetailsLoader />
        )}

        {isLoaded ? (
          <StyledMoon>
            <div>
              <StyledDescription>Moonrise</StyledDescription>
              <StyledMoonrise
                backgroundUrl={
                  'https://image.flaticon.com/icons/png/512/728/728098.png'
                }
              >
                {moonrise} PM
              </StyledMoonrise>
            </div>
            <div>
              <StyledDescription>Moonset</StyledDescription>
              <StyledMoonset
                backgroundUrl={
                  'https://image.flaticon.com/icons/png/512/728/728099.png'
                }
              >
                {moonset} AM
              </StyledMoonset>
            </div>
          </StyledMoon>
        ) : (
          <DetailsLoader />
        )}
      </Flex>
    </StyledDetails>
  );
});

export default Details;
