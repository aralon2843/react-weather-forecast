import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    font-size: 14px;
  }
  p {
    margin: 0;
  }
`
export default GlobalStyle