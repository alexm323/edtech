import {useState, useEffect} from 'react'
import {Flex,Heading,Image,Box} from '@chakra-ui/react';
/* 
Text
Heading
Box
Flex
Grid
 <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
*/

function FlashCard({cardData}) {
    let question = `What is the capital of ${cardData.state}?`
    let answer = `The capital is ${cardData.capital}`
    
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped)
    }


    return (
        <Box >
            <Flex onClick={handleFlip} bg={flipped ? 'red.100':'blue.100'} w="100%" p={4} mb={3} flexDirection={'column'} align='center' border="4px solid #000" borderRadius="5px" >
                <Heading  py="0.5em" px="1.25em" fontWeight="600" background="#fff" borderRadius="5px">
                    {!flipped ? question : answer} 
                </Heading>
                <Image src={cardData.url} alt={`${cardData.state} flag`}  boxSize='400px' objectFit="contain" />
            </Flex>
        </Box>
    )
}

export default FlashCard
