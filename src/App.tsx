import '@fontsource/open-sans/400.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/400.css'

import {
  ChakraProvider,
  VStack,
} from "@chakra-ui/react"
import theme from "./theme"
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Features from './components/Features/Features'
import IntroSection from './components/IntroSection/IntroSection'
import StayProductive from './components/ProductiveSection/StayProductive'
import Reviews from './components/Reviews/Reviews'
import SignUpPage from './components/SignUp/SignUpPage'
import Footer from './components/Footer/Footer'

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack bg='#181F2A' >
      <IntroSection />
      <Features />
      <StayProductive />
      <Reviews />
      <SignUpPage />
      <Footer />
    </VStack>
  </ChakraProvider>
)

{/* <ColorModeSwitcher justifySelf="flex-end" /> */}