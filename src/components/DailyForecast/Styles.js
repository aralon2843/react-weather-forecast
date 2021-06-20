import styled from 'styled-components';

export const StyledDailyForecast = styled.div`
  max-width: 1000px;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 0px auto;
`;
export const StyledTitle = styled.h2`
  font-size: 18px;
`;

export const StyledWrapper = styled.div`
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 2px 2px 10px 2px;
`;
