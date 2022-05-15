import { 
    chakra,
    forwardRef,
    ImageProps, 
} from "@chakra-ui/react"
import bgcurvy from '../../assets/images/bg-curvy-mobile.svg'
import accessanywhere from '../../assets/images/icon-access-anywhere.svg'
import securityicon from '../../assets/images/icon-security.svg'
import collaborationicon from '../../assets/images/icon-collaboration.svg'
import anyfileicon from '../../assets/images/icon-any-file.svg'
import arrowicon from '../../assets/images/icon-arrow.svg'
import locationicon from '../../assets/images/icon-location.svg'
import phoneicon from '../../assets/images/icon-phone.svg'
import emailicon from '../../assets/images/icon-email.svg'
import logomobile from '../../assets/images/logo1.svg'

export const BgCurvyMobile = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={bgcurvy} ref={ref} {...props} />
})

export const AccessAnywhere = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={accessanywhere} ref={ref} {...props} />
})

export const SecurityIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={securityicon} ref={ref} {...props} />
})

export const CollaborationIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={collaborationicon} ref={ref} {...props} />
})

export const AnyFileIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={anyfileicon} ref={ref} {...props} />
})

export const ArrowIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={arrowicon} ref={ref} {...props} />
})

export const LocationIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={locationicon} ref={ref} {...props} />
})

export const PhoneIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={phoneicon} ref={ref} {...props} />
})

export const EmailIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={emailicon} ref={ref} {...props} />
})

export const LogoMobileIcon = forwardRef<ImageProps, "img">((props: any, ref: any) => {
    return <chakra.img src={logomobile} ref={ref} {...props} />
})