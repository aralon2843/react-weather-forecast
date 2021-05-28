import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

import App from './app'
import store from './redux/store'

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
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
