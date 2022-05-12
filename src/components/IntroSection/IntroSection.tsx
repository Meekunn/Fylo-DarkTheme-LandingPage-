import {
    Box,
    VStack,
    Image
} from "@chakra-ui/react"
import GetStarted from "./GetStarted"
import Navbar from "./Navbar"
import IntroPNG from "../../assets/images/illustration-intro.png"

const FirstPage = () => {
    return (
        <Box bg='#202A3C' w='100%' h='100vh'>
          <VStack spacing={8}>
            <Navbar />
              <Image 
                src={IntroPNG}
                pr='2rem' 
                pl='2rem'
                zIndex={1}
              />
            <GetStarted />
        </VStack>
      </Box>
    )
}

export default FirstPage