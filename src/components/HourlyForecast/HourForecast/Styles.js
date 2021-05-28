import styled from 'styled-components'

export const StyledHourForecast = styled.div`
  min-width: 100px;
  padding: 10px 15px 10px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 35px;
  height: 35px;
  margin-bottom: 10px;
`

export const StyledTemperature = styled.p`
  font-size: 20px;
  margin-bottom: 8px;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  margin-bottom: 15px;
`

export const StyledPrecipitaion = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5px;
`

export const StyledWind = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
`

export const StyledTime = styled.p`
  font-size: 14px;
  font-weight: 500;
`
