import { 
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react"

const Feature = (props: any) => {
    return (
        <Flex direction='column' justify='center' align='center' pb='8rem'>
            {props.icon}
            <Heading
                fontSize='1.3rem'
                textAlign='center'
                pt='2rem'
            > 
                {props.title} 
            </Heading>
            <Text
                pt='0.7rem'
                fontSize='0.95rem'
                textAlign='center'
            > 
                {props.summary} 
            </Text>
        </Flex>
    )
}

export default Feature