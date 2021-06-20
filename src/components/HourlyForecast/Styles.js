import styled from 'styled-components';

export const StyledHourlyForecast = styled.div`
  margin-bottom: 25px;
  overflow: hidden;
`;

export const StyledTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 25px;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ active }) =>
    active ? 'ccc' : 'rgba(255, 255, 255, 0.5)'};
  padding: 5px;
  height: 30px;
  width: 100%;
  font-size: 13px;
  &:hover {
    outline: 1px solid #fff;
  }
  cursor: pointer;
  margin-right: 15px;
  font-weight: 500;
  color: #262626;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;
export const StyledWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledForecastLine = styled.div`
  display: flex;
  justify-content: ${({ isLoaded, justify }) =>
    isLoaded ? justify : 'center'};
`;

export const StyledSubtitle = styled.p`
  font-size: 18px;
  margin: 20px 0px;
`;

export const GraphWrapper = styled.div`
  min-height: 212px;
`;
