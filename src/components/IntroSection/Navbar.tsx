import { 
    Flex,
    VStack,
    chakra,
    Spacer,
    Link,
} from "@chakra-ui/react"
import logo from '../../assets/images/logo1.svg'


const Navbar = () => {
    return (
        <VStack bg='#202A3C' w='100%'>
            <Flex p={4} w='100%' pt='1.5rem' pb='1.5rem'>
                <chakra.img src={logo} />
                <Spacer />
                <Flex color='#c8d0dd' justify='space-around'>
                    <Link 
                    href='#' 
                    p='0.7rem' 
                    fontSize='0.9rem'
                    fontFamily='Raleway, sans-serif'
                    >
                        Features
                    </Link>
                    <Link 
                    href='#' 
                    p='0.7rem' 
                    fontSize='0.9rem'
                    fontFamily='Raleway, sans-serif'
                    >
                        Team
                    </Link>
                    <Link 
                    href='#' 
                    p='0.7rem' 
                    fontSize='0.9rem'
                    fontFamily='Raleway, sans-serif'
                    >
                        Sign In
                    </Link>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default Navbar