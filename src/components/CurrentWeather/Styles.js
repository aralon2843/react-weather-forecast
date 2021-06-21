import styled from 'styled-components'

export const StyledCurrentWeather = styled.div`
  text-align: center;
  max-width: 300px;
  margin: 0px auto;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 15px;
  }
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
  display: flex;
  align-items: center;
  font-size: 12px;
  & span {
    margin-right: 7px;
  }
  & span:last-child {
    margin-right: 0px;
  }
`
export const FeelsLike = styled.div`
  flex: 1 1 33%;
  background: url(${(props) => props.icon}) center left no-repeat;
  background-size: 25px;
  padding-left: 20px;
`

export const Wind = styled.div`
  flex: 1 1 33%;
  background: url(${(props) => props.icon}) center left no-repeat;
  background-size: 25px;
  padding-left: 20px;
`

export const Visibility = styled.div`
  flex: 1 1 33%;
  background: url(${(props) => props.icon}) center left no-repeat;
  background-size: 25px;
  padding-left: 20px;
`
