import {
    Box, 
    chakra,
    Container,
    Flex,
    Text,
} from '@chakra-ui/react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/images/logo.svg'
import location from '../../assets/images/icon-location.svg'
import phone from '../../assets/images/icon-phone.svg'
import email from '../../assets/images/icon-email.svg'

const Footer = () => {
    return (
        <Box color='#c8d0dd' bgColor='#0B1523' mt='0 !important'>
            <chakra.img src={logo} p='2rem 0 2rem 3rem' />
            <Flex 
                gap='20px'
                padding='1rem 2rem'
                align='flex-start'
                justify='flex-start'
            >
                <chakra.img src={location} width='20px' height='20px' />
                <Text
                    fontSize='1rem'
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
            </Flex>
            <Flex 
                gap='20px'
                padding='1rem 2rem'
                align='flex-start'
                justify='flex-start'
            >
                <chakra.img src={phone} width='20px' height='20px' />
                <Text
                    fontSize='1rem'
                >
                    +1-543-123-4567
                </Text>
            </Flex>
            <Flex 
                gap='20px'
                padding='1rem 2rem'
                align='flex-start'
                justify='flex-start'
            >
                <chakra.img src={email} width='20px' height='20px' />
                <Text
                    fontSize='1rem'
                >
                    example@fylo.com
                </Text>
            </Flex>
            <Container m='2rem 0'>
                <Text fontSize='1rem' p='5px'>
                    About Us
                </Text>
                <Text fontSize='1rem' p='5px'>
                    Jobs
                </Text>
                <Text fontSize='1rem' p='5px'>
                    Press
                </Text>
                <Text fontSize='1rem' p='5px'>
                    Blog
                </Text>
            </Container>
            <Container m='2rem 0'>
                <Text fontSize='1rem' p='5px'>
                    Contact Us
                </Text>
                <Text fontSize='1rem' p='5px'>
                    Terms
                </Text>
                <Text fontSize='1rem' p='5px'>
                    Privacy
                </Text>
            </Container>
            <Flex justify='center' align='center' m='5rem 0 3rem'>
                <Box borderRadius='50%' border='2px solid #c8d0dd' p='0.5rem' m='0 0.5rem'>
                    <FaFacebookF />
                </Box>
                <Box borderRadius='50%' border='2px solid #c8d0dd' p='0.5rem' m='0 0.5rem'>
                    <FaTwitter/>
                </Box>
                <Box borderRadius='50%' border='2px solid #c8d0dd' p='0.5rem' m='0 0.5rem'>
                    <FaInstagram />
                </Box>
            </Flex>
        </Box>
    )
} 

export default Footer