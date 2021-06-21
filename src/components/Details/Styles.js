import styled from 'styled-components'

export const StyledDetails = styled.div`
  min-height: 212px;
`

export const StyledDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
`

export const StyledSun = styled.div`
  padding-top: 5px;
  margin-right: 25px;
  font-size: 24px;
  line-height: 30px;
  min-width: 130px;

  @media (max-width: 768px) {
    font-size: 17px;
    display: block;
    margin-right: 10px;
  }
`

export const StyledMoon = styled.div`
  padding-top: 5px;
  font-size: 24px;
  line-height: 30px;
  min-width: 130px;

  @media (max-width: 768px) {
    font-size: 17px;
    display: block;
  }
`

export const StyledWeatherPeriod = styled.div`
  padding-left: 43px;
  background: ${({ backgroundUrl }) =>
    backgroundUrl && `url(${backgroundUrl}) left/cover no-repeat`};
  background-size: 32px;
`

export const StyledSunrise = styled(StyledWeatherPeriod)`
  margin: 5px 20px 15px 0px;
`
export const StyledSunset = styled(StyledWeatherPeriod)`
  margin: 5px 0px 15px 0px;
`
export const StyledMoonrise = styled(StyledWeatherPeriod)`
  margin: 5px 20px 15px 0px;
`
export const StyledMoonset = styled(StyledWeatherPeriod)`
  margin: 5px 0px 15px 0px;
`
