import styled from 'styled-components'

export const StyledHourForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px 10px 5px;
  min-width: 80px;
  flex: 0 1 110px;
  opacity: 0.3;
  position: relative;
  animation: 0.5s slidein forwards;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  margin-right: 25px;

  &:last-child{
    margin-right: 0px;
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
  margin: -15px 0px -12px 0px;
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
  text-align: center;
`

export const StyledPrecipitation = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
  background: url(${(props) => props.icon}) left/cover no-repeat;
  background-size: 16px;
  padding-left: 22px;
`

export const StyledWind = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  background: url(${(props) => props.icon}) left/cover no-repeat;
  background-size: 18px;
  padding-left: 22px;
`

export const StyledTime = styled.p`
  font-size: 14px;
  font-weight: 500;
`
