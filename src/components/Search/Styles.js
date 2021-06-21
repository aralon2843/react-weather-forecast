import styled from 'styled-components'

export const StyledSearch = styled.input`
  min-width: 250px;
  max-width: 400px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
  color: #fff;
  font-weigth: 500;
  padding: 3px 10px;
  background: url(${(props) => props.icon}) calc(100% - 15px) center no-repeat;
  background-size: 17px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`
export const StyledSearchWrapper = styled.div`
  text-align: center;
`
export const StyledErrorMessage = styled.p`
  font-size: 10px;
  color: #ec6e4c;
  margin-top: 4px;
  margin-bottom: -15px;
`
