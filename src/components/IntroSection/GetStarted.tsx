
import { 
    Button,
    Container,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react'
import { BgCurvyMobile } from '../Icons/Svgs'


const GetStarted = () => {
    return (
        <Container p={0} position='relative' top='-70px'>
            <Stack position='relative'>
                <BgCurvyMobile width='100%' />
                <Container
                    position='absolute' 
                    textAlign='center'
                    top='65px'
                    padding='1rem 0.5rem'
                    color='#c8d0dd'
                >
                    <Heading fontSize='1.7rem' >
                        All your files in one secure location, accessible anywhere.
                    </Heading>
                </Container>
            </Stack>
            <Stack 
                color='#c8d0dd' 
                textAlign='center' 
                bg='#181F2A' 
                padding='3rem 0'>
                <Text
                    padding='2rem'
                    fontSize='0.95rem'
                >
                    Fylo stores all your most important files in one secure location. 
                    Access them wherever you need, share and collaborate with friends family, and co-workers.
                </Text>
                <Flex direction='row' justify='center'>
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
            </Stack>
        </Container>
    )
}

export default GetStarted