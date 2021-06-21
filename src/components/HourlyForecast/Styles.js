import styled from 'styled-components'

export const StyledHourlyForecast = styled.div`
  margin-bottom: 25px;
  overflow: hidden;
`

export const StyledButtons = styled.h2`
  margin-bottom: 25px;
`

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  padding: 5px;
  height: 35px;
  width: 100px;
  border-radius: 10px;
  font-size: 12px;
  &:hover {
    font-weight: 600;
  }
  cursor: pointer;
  margin-right: 15px;
  font-weight: ${({active}) => active ? 600 : 500};
  color: #ffffff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  text-transform: uppercase;
  transition: 0.1s background-color all;
`
export const StyledWrapper = styled.div`
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledForecastLine = styled.div`
  display: flex;
  justify-content: ${({ isLoaded, justify }) =>
    isLoaded ? justify : 'center'};
`

export const StyledSubtitle = styled.p`
  font-size: 18px;
  margin: 20px 0px;
`

export const GraphWrapper = styled.div`
  min-height: 212px;
`
