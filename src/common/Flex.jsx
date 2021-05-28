import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'stretch'};
  margin: 0px;
`

function Flex(props) {
  return <StyledFlex {...props} />
}

export default Flex
