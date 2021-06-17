import styled from 'styled-components'

export const StyledHourForecast = styled.div`
  padding: 10px 10px 10px 5px;
  min-width: 80px;
  flex: 0 1 135px;
  // top: 200px;
  opacity: 0.2;
  position: relative;
  -webkit-animation: 1s slidein forwards;
  animation: 1s slidein forwards;

  @-webkit-keyframes slidein {
    100% {
      opacity: 1;
    }
  }

  @keyframes slidein {
    100% {
      opacity: 1;
    }
  }
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
  margin: -15px 0px -12px -14px;
`

export const StyledTemperature = styled.p`
  font-size: 20px;
  margin-bottom: 7px;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  min-height: 33px;
  height: 45px;
  max-width: 60px;
`

export const StyledPrecipitation = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
  background: url(${(props) => props.humidity}) left/cover no-repeat;
  background-size: 15px;
  padding-left: 20px;
`

export const StyledWind = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  background: url(${(props) => props.wind}) left/cover no-repeat;
  background-size: 15px;
  padding-left: 20px;
`

export const StyledTime = styled.p`
  font-size: 14px;
  font-weight: 500;
`
