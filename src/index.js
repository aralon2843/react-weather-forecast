import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

import App from './app'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 14px;
  }
  p {
    margin: 0;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
