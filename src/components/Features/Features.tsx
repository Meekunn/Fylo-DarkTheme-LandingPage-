import { 
    Stack,
} from "@chakra-ui/react"
import { 
    AccessAnywhere, 
    SecurityIcon, 
    CollaborationIcon, 
    AnyFileIcon,
} from "../Icons/Svgs"
import Feature from "./Feature"

const featureDetails: IFeature[] = [
    {
        id: 1,
        icon: <AccessAnywhere />,
        title: 'Access your files, anywhere',
        summary: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everwhere.'
    },{
        id: 2,
        icon: <SecurityIcon />,
        title: 'Security you can trust',
        summary: '2-factor authentication and user-controlled encryption are just a couple of the security feautures we allow to help secure your files.'
    },{
        id: 3,
        icon: <CollaborationIcon />,
        title: 'Real-time collaboration',
        summary: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },{
        id: 4,
        icon: <AnyFileIcon />,
        title: 'Store any type of file',
        summary: "Whether you're sharing holidays photos or work documents, Fylo has you covered alllowing for all file types to be securely stored and shared."
    },
]

const Features = () => {
    return (
        <Stack bg='#181F2A' color='#c8d0dd' p='10rem 2rem 5rem'>
            {featureDetails.map((detail: any) => {
                return (
                    <Feature key={detail.id} icon={detail.icon} title={detail.title} summary={detail.summary} />
                 )
            })}
        </Stack>
    )
}

export default Features