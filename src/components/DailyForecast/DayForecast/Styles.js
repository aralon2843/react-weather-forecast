import styled from 'styled-components'

export const StyledDayForecast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px 10px 10px;
  min-width: 95px;
  width: 120px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: calc(50% - 13px);
      border: 13px solid transparent;
      border-top: 7px solid rgba(255, 255, 255, 0.3);
    }
  }
  transition: 0.1s backround-color all;

  margin: 0px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (max-width: 768px) {
    width: 80px;
    padding: 5px;
  }
`
export const StyledDate = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`

export const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 70px;
  height: 70px;
  margin: -10px 0px -10px -15px;
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
export const StyledDescription = styled.p`
  text-align: center;
`
