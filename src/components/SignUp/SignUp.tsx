import {
    Button,
    Flex, 
    Heading,
    Text,
    Input,
} from '@chakra-ui/react'

const SignUp = () => {
    return (
        <Flex 
            direction='column' 
            align='center' 
            justify='center' 
            bgColor='#202A3C' 
            color='#c8d0dd'
            borderRadius='10px'
            boxShadow='10px 10px 5px #0c141e'
            p='3rem 2rem'
        >
            <Heading 
                fontSize='1.3rem' 
                pb='10px' 
                textAlign='center'
            >
                Get early access today
            </Heading>
            <Text 
                fontSize='1rem' 
                p='10px 0'
                textAlign='center'
            >
                It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help you.
            </Text>
            <Input 
                placeholder='email@example.com'
                size='xs'
                variant='filled'
                bgColor='#fff'
                fontFamily='Open sans, sans-serif'
                borderRadius='30px'
                p='1.5rem'
                m='1.5rem'
            />
            <Button 
                bg='#339ECC'
                p='1rem 5rem' 
                size='lg' 
                variant='solid'
                fontFamily='Raleway, sans-serif'
                fontSize='0.95rem'
                fontWeight={700}
                borderRadius='30px'
            >
                Get Started
            </Button>
        </Flex>
    )
}

export default SignUp