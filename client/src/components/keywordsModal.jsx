import { 
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,  
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,     
    CircularProgress
 } from "@chakra-ui/react"
 import ReactMarkdown from "react-markdown"

const keywordsModal = ({keywords, loading, isOpen, closeModal}) => {
  // Handle different data types - stringify objects, keep strings as is
  let displayContent = typeof keywords === 'string' ? keywords : JSON.stringify(keywords, null, 2);
  
  // Make "short tail keywords" and "long tail keywords" bold using markdown
  displayContent = displayContent
    .replace(/Short-tail keywords:/g, '**Short-tail keywords:**')
    .replace(/Long-tail keywords:/g, '**Long-tail keywords:**');
  
  return (
    <>
     <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Keywords Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            {loading ? (
              <CircularProgress isIndeterminate color='blue.300' />
            ) : (
              <Box w={'full'}>
                <ReactMarkdown>{displayContent}</ReactMarkdown>
              </Box>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={'blue'} mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    
    </>
  )
}

export default keywordsModal