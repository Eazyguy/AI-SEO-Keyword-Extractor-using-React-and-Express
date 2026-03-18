import {Box, Image, Text, Flex} from '@chakra-ui/react'
import QwenLogo from "../assets/Qwen-logo.webp"
import huggingfaceLogo from "../assets/huggingface_logo.svg"

const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Image src={QwenLogo} width={'50px'} marginRight={1}/>
            <Image src={huggingfaceLogo} width={'50px'} marginRight={1}/>
            <Text>Powered by huggingface Gwen</Text>
        </Flex>
    </Box>
  )
}

export default Footer
