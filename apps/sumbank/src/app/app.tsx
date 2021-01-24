import React, { Suspense } from 'react'
import { Box, Center, Container } from '@chakra-ui/react'

import { UiHeader } from '@landslide/ui-header'

export function App() {
  return (
    <Container maxW="2xl" centerContent>
      <Box p={2}>
        <UiHeader name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Box>
      <Center bg="brand.100" w="100%" p={4} color="white">
        Welcome to sumbank
      </Center>
      <Box>
        <p>Thank you for using and showing some ♥ for Nx.</p>
      </Box>
    </Container>
  )
}

export default App
