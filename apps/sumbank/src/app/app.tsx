import React from 'react'
import { Box, Container } from '@chakra-ui/react'

import { ReactComponent as Logo } from './logo.svg'

export function App() {
  return (
    <Container maxW="2xl" centerContent>
      <Box>
        <Logo width="75" height="75" />
      </Box>
      <Box bg="brand.100" w="100%" p={4} color="white">
        Welcome to sumbank
      </Box>
      <Box>
        <p>Thank you for using and showing some ♥ for Nx.</p>
      </Box>
    </Container>
  )
}

export default App
