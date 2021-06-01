import { memo } from 'react'
import { useSelector } from 'react-redux'
import convertTime from '../../common/convertTime'
import Flex from '../../common/Flex'
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

  const sunset = convertTime(day[0]?.sunset)
  const sunrise = convertTime(day[0]?.sunrise)
  const moonset = convertTime(day[0]?.moonset)
  const moonrise = convertTime(day[0]?.moonrise)

  return (
    <StyledDetails>
      <StyledTitle>Day Details</StyledTitle>
      <Flex>
        <StyledSun>
          <StyledDescription>Sunrise</StyledDescription>
          <StyledSunrise>{sunrise} AM</StyledSunrise>
          <StyledDescription>Sunset</StyledDescription>
          <StyledSunset>{sunset} PM</StyledSunset>
        </StyledSun>
        <StyledMoon>
          <StyledDescription>Moonrise</StyledDescription>
          <StyledMoonrise>{moonrise} PM</StyledMoonrise>
          <StyledDescription>Moonset</StyledDescription>
          <StyledMoonset>{moonset} AM</StyledMoonset>
        </StyledMoon>
      </Flex>
    </StyledDetails>
  )
})

export default Details
