import styled from 'styled-components'

export const StyledDayForecast = styled.div`
  padding: 5px 15px 10px 5px;
  min-width: 100px;
  &:hover {
    outline: 2px solid rgba(255, 255, 255, 0.5);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -23px;
      left: calc(50% - 13px);
      border: 13px solid transparent;
      border-top: 10px solid rgba(255, 255, 255, 0.5);
    }
  }
`
export const StyledDate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 35px;
  height: 35px;
`

export const StyledTemperature = styled.p`
  font-size: 24px;
  margin-top: 10px;
  & span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
  margin-bottom: 10px;
`
