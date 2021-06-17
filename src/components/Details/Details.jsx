import { memo } from 'react'
import { useSelector } from 'react-redux'
import convertTime from '../../common/convertTime'
import Flex from '../../common/Flex'
import DetailsLoader from './DetailsLoader'
import {
  StyledDetails,
  StyledMoon,
  StyledMoonrise,
  StyledSun,
  StyledSunrise,
  StyledTitle,
  StyledSunset,
  StyledMoonset,
  StyledDescription,
} from './Styles'

const Details = memo((props) => {
  const activeDay = useSelector((state) => state.dailyWeather.activeDay.date)

  const days = useSelector((state) => state.dailyWeather.days)
  const day = days.filter(
    (day) => new Date(day.dt * 1000).toDateString() === activeDay
  )
  const isLoad = useSelector((state) => state.currentWeather.isLoad)

  const sunset = convertTime(day[0]?.sunset)
  const sunrise = convertTime(day[0]?.sunrise)
  const moonset = convertTime(day[0]?.moonset)
  const moonrise = convertTime(day[0]?.moonrise)

  return (
    <StyledDetails>
      <StyledTitle>Day Details</StyledTitle>
      <Flex>
        {isLoad ? (
          <StyledSun>
            <div>
              <StyledDescription>Sunrise</StyledDescription>
              <StyledSunrise>{sunrise} AM</StyledSunrise>
            </div>
            <div>
              <StyledDescription>Sunset</StyledDescription>
              <StyledSunset>{sunset} PM</StyledSunset>
            </div>
          </StyledSun>
        ) : (
          <DetailsLoader />
        )}
        {isLoad ? (
          <StyledMoon>
            <div>
              <StyledDescription>Moonrise</StyledDescription>
              <StyledMoonrise>{moonrise} PM</StyledMoonrise>
            </div>
            <div>
              <StyledDescription>Moonset</StyledDescription>
              <StyledMoonset>{moonset} AM</StyledMoonset>
            </div>
          </StyledMoon>
        ) : (
          <DetailsLoader />
        )}
      </Flex>
    </StyledDetails>
  )
})

export default Details
