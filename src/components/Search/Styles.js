import styled from 'styled-components'

export const StyledSearch = styled.input`
  min-width: 250px;
  max-width: 400px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  color: #fff;
  font-weigth: 500;
  padding: 5px;
  padding-left: 30px;
  background: url(${props => props.icon}) center left no-repeat;
  background-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
export const StyledSearchWrapper = styled.div`
  text-align: center;
`
