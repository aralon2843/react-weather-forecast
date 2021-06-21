import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Montserrat', sans-serif;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    font-weight: 500;
  }
  p {
    margin: 0;
  }
  input[type="text"], textarea {
    &:focus {
      background-color: rgba(255, 255, 255, 0.1); 
    }
    transition: 0.1s ease all;
  }
`
export default GlobalStyle
