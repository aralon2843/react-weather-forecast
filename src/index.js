import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

import App from './App'
import store from './redux/store'

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

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
