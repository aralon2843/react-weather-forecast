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

const Details = () => {
  return (
    <StyledDetails>
      <StyledTitle>Day Details</StyledTitle>
      <Flex>
        <StyledSun>
          <StyledDescription>Sunrise</StyledDescription>
          <StyledSunrise>4:28 AM</StyledSunrise>
          <StyledDescription>Sunset</StyledDescription>
          <StyledSunset>8:11 PM</StyledSunset>
        </StyledSun>
        <StyledMoon>
          <StyledDescription>Moonrise</StyledDescription>
          <StyledMoonrise>10:57 PM</StyledMoonrise>
          <StyledDescription>Moonset</StyledDescription>
          <StyledMoonset>5:50 AM</StyledMoonset>
        </StyledMoon>
      </Flex>
    </StyledDetails>
  )
}

export default Details
