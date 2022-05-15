import { 
    Stack,
    Image,
} from "@chakra-ui/react"
import Review from "./Review"
import Profile1 from '../../assets/images/profile-1.jpg'
import Profile2 from '../../assets/images/profile-2.jpg'
import Profile3 from '../../assets/images/profile-3.jpg'
import Quotes from '../../assets/images/bg-quotes.png'

const reviews: IReview[] = [
    {
        id: 1,
        name: 'Satish Patel',
        photo: Profile1
    },{
        id: 2,
        name: 'Bruce McKenzie',
        photo: Profile2
    },{
        id: 3,
        name: 'Iva Boyd',
        photo: Profile3
    }
]

const Reviews = () => {
    return (
        <Stack bg='#181F2A' p='8rem 3rem 2rem'>
            <Image src={Quotes} width='10%' />
            {reviews.map((review :any) => {
                return (
                    <Review key={review.id}  photo={review.photo} name={review.name} />
                )
            })}
        </Stack>
    )
}

export default Reviews