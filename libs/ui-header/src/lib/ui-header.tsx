import React from 'react'
import { Avatar } from '@chakra-ui/react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export interface UiHeaderProps {
  name: string
  src: string
}
const StyledUiHeader = styled.div`
  color: pink;
`

export function UiHeader(props: UiHeaderProps) {
  console.log('hahah')
  return (
    <StyledUiHeader>
      <Avatar {...props} />
    </StyledUiHeader>
  )
}

export default UiHeader
