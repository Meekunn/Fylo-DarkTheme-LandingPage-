import { 
    Stack,
    Image,
    Heading,
    Text,
    Link,
    Box,
    Flex,
    chakra,
} from '@chakra-ui/react'
import ProductivePNG from '../../assets/images/illustration-stay-productive.png'
import arrow from '../../assets/images/icon-arrow.svg'

const StayProductive = () => {
    return (
        <Stack color='#c8d0dd' p='0 2rem 3rem'>
            <Image 
              src={ProductivePNG}
            />
            <Heading
                fontSize='1.2rem'
                textAlign='left'
                pt='2rem'
            > 
                Stay productive, wherever you are
            </Heading>
            <Text
                pt='0.7rem'
                fontSize='0.85rem'
                textAlign='left'
            > 
                Never let location be an issue when accesing your files. Fylo has you covered for all of your file storage needs.
            </Text>
            <Text
                pt='0.7rem'
                fontSize='0.95rem'
                textAlign='left'
            > 
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
            </Text>
            <Flex direction='row' align='center' pt='0.5rem'>
                <Link
                    color='#65E2D9'
                    pr='0.5rem'
                    fontSize='0.8rem'
                    fontFamily='Open sans, san-serif'
                >
                    See how Fylo works
                </Link>
                <chakra.img src={arrow} />
            </Flex>
            <Box bgColor='#65E2D9' height='1px' width='150px'></Box>
        </Stack>
    )
}

export default StayProductive