import styled from 'styled-components'
import background from './assets/images/background.jpg'

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background: url(${background}) top/cover no-repeat;
  padding: 0px 15px;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`
