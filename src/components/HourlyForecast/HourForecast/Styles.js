import styled from 'styled-components'

export const StyledHourForecast = styled.div`
  padding: 10px 10px 10px 5px;
  min-width: 80px;
  flex: 0 1 135px;
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
  margin: -15px 0px -12px -15px;
`

export const StyledTemperature = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
  min-height: 32px;
  max-width: 60px;
`

export const StyledPrecipitation = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
  background: url(${props => props.humidity}) left/cover no-repeat;
  background-size: 15px;
  padding-left: 20px;
`

export const StyledWind = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
  background: url(${props => props.wind})
    left/cover no-repeat;
  background-size: 15px;
  padding-left: 20px;
`

export const StyledTime = styled.p`
  font-size: 14px;
  font-weight: 500;
`
