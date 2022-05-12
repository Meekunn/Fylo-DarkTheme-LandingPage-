import '@fontsource/open-sans/400.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'

import {
  ChakraProvider,
  Box,
  VStack,
} from "@chakra-ui/react"
import theme from "./theme"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Features from './components/Features/Features'
import IntroSection from './components/IntroSection/IntroSection'
import StayProductive from './components/ProductiveSection/StayProductive'
import Reviews from './components/Reviews/Reviews'

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack bg='#0B1523' >
      <IntroSection />
      <Features />
      <StayProductive />
      <Reviews />
    </VStack>
  </ChakraProvider>
)

{/* <ColorModeSwitcher justifySelf="flex-end" /> */}