import { 
    Container,
    Flex,
    Heading,
    Image,
    Stack, 
    Text,
} from "@chakra-ui/react"

const Review = (props: any) => {
    return (
        <Stack p='2rem 1.5rem' bgColor='#202A3C' mb='2rem' ml='0.5rem' mt='0' color='#c8d0dd' spacing={15} borderRadius={"md"} >
            <Text
                fontSize='0.9rem'
            >
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
            </Text>
            <Flex direction='row'>
                <Image 
                    src={props.photo} 
                    borderRadius='50%'
                    width='15%'
                />
                <Container>
                    <Heading
                        fontSize='0.9rem'
                        p='0.2rem 0'
                    >
                        {props.name}
                    </Heading>
                    <Text
                        fontSize='0.6rem'
                    >
                        Founder &#38; CEO, Huddle
                    </Text>
                </Container>
            </Flex>
        </Stack>
    )
}

export default Review