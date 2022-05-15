import {
    VStack,
} from '@chakra-ui/react'
import SignUp from './SignUp'

const SignUpPage = () => {
    return (
        <VStack 
            bgImage="linear-gradient(180deg, #181F2A 50%, #0B1523 50%)" 
            p='5rem 2rem' 
            width='100%'
        >
            <SignUp />
        </VStack>
    )
}

export default SignUpPage