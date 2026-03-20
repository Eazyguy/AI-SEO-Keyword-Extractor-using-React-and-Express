import { useState } from "react"
import { Box, Container } from "@chakra-ui/react"
import Header from './components/Header'
import Footer from './components/Footer'
import Textinput from "./components/Textinput"
import KeywordsModal from "./components/keywordsModal"

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async(text) => {
    setLoading(true);
    setIsOpen(true);

    
      try {
        
       const res = await fetch('/api/extract-keywords', {
        method:'POST',
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({text})
       })

       const data = await res.json()
        console.log(data);
        setKeywords(data);
        setLoading(false);
        return; // Success, exit
      } catch (error) {
        console.error('Error extracting keywords:', error);
        setKeywords('Error: Unable to extract keywords. Please try again.');
        setLoading(false);
        
      }
    }

    const closeModal = () => {
      setIsOpen(false);
      setKeywords('');
    }
  

  return (
    
    <>
      <Box bg={"blue.600"} minH={'100vh' }paddingTop={130} color='white'>
        <Container maxW={'3xl'} centerContent>
        <Header/>
        <Textinput extractKeywords={extractKeywords} isOpen={isOpen}/>
        <Footer/>
        </Container> 
        <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal}/>  
      </Box>
      
    </>
  )
}

export default App