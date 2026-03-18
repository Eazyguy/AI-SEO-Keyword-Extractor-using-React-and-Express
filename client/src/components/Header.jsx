import {Heading, Text, Image} from "@chakra-ui/react"
import logo from "../assets/light-bulb-color-icon.svg"

const header = () => {
  return (
    <>
    <Image src={logo} width={100} marginBottom={'1rem'} />
    <Heading color={"white"} marginBottom={'1rem'}>
        AI Keyword Extractor
    </Heading>
    <Text fontSize={25} textAlign={'center'}>
        Paste in your text below and we'll extract the keywords for you
    </Text>
    </>
  )
}

export default header