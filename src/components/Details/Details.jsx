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
          <StyledSunrise>Test AM</StyledSunrise>
          <StyledDescription>Sunset</StyledDescription>
          <StyledSunset>Test PM</StyledSunset>
        </StyledSun>
        <StyledMoon>
          <StyledDescription>Moonrise</StyledDescription>
          <StyledMoonrise>Test PM</StyledMoonrise>
          <StyledDescription>Moonset</StyledDescription>
          <StyledMoonset>Test AM</StyledMoonset>
        </StyledMoon>
      </Flex>
    </StyledDetails>
  )
}

export default Details
