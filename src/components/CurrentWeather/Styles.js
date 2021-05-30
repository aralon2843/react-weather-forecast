import styled from 'styled-components'

export const StyledCurrentWeather = styled.div`
  text-align: center;
  max-width: 270px;
  margin: 0px auto;
  margin-top: 15px;
  margin-bottom: 20px;
`
export const StyledLocation = styled.p`
  font-size: 20px;
`

export const StyledTemperature = styled.p`
  font-size: 72px;
  font-weight: 200;
`

export const StyledWeatherIcon = styled.img`
  object-fit: cover;
  object-position: center;
  width: 120px;
  margin: -10px;
`

export const StyledDescription = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
`

export const CurrentWeatherDetails = styled.div`
  font-size: 12px;
  & span {
    margin-right: 7px;
  }
  & span:last-child {
    margin-right: 0px;
  }
`

