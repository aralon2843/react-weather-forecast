import styled from 'styled-components'

export const StyledHourlyForecast = styled.div`
  margin-bottom: 25px;
  overflow: hidden;
`

export const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 25px;
`

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.active ? 'ccc' : 'rgba(255, 255, 255, 0.5)'};
  padding: 5px;
  height: 30px;
  width: 100%;
  font-size: 13px;
  &:hover {
    outline: 1px solid #fff;
  }
  cursor: pointer;
  margin-right: 15px;
`
export const StyledWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledForecastLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledSubtitle = styled.p`
  font-size: 18px;
  margin: 25px 0px;
`
