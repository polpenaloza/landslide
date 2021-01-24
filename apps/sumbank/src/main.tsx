import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

import App from './app/app'
import theme from './theme'

const extendedTheme = extendTheme(theme)

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={extendedTheme.config.initialColorMode} />
    <ChakraProvider theme={extendedTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
