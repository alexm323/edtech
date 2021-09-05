import {useState, useEffect, useLayoutEffect} from 'react'
import {Spinner, Flex,Heading,Image as Img,Box, Button} from '@chakra-ui/react';
/* 
Text
Heading
Box
Flex
Grid
 <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
*/

function FlashCard({cardData, handleNext}) {
    let question = `What is the capital of ${cardData.state}?`
    let answer = `The capital is ${cardData.capital}`
  
    
    const [flipped, setFlipped] = useState(false);
    const [imageReady, setImageReady] = useState(false);
    const [loaded, setLoaded] = useState(false);



    useLayoutEffect(() => {
        /* force a preload of the image to avoid a flicker */
        const img = new Image();
        img.src = cardData.url;
        img.alt = `${cardData.state} flag`
        img.width = 400;
        img.style.objectFit = "contain";
        img.style.margin = "1em";

        img.onload = () => {
           setImageReady(true)
        }

        document.querySelector('#cardContainer').appendChild(img);
        
        return () => document.querySelector('#cardContainer').removeChild(img);

    }, [cardData.url])

    const handleFlip = () => {
        setFlipped(!flipped)
    }


    return  (
        <>
        <Box >
            <Flex id="cardContainer" onClick={handleFlip} display={!imageReady ? 'none' : 'flex'} bg={flipped ? 'red.100':'blue.100'} w="100%" p={4} mb={3} flexDirection={'column'} align='center' border="4px solid #000" borderRadius="5px" >
                <Heading  py="0.5em" px="1.25em" fontWeight="600" background="#fff" borderRadius="5px">
                    {!flipped ? question : answer} 
                </Heading>
                
                {/* <Img src={cardData.url} alt={`${cardData.state} flag`}  boxSize='400px' objectFit="contain" /> */}
            </Flex>
            <Button onClick={handleNext} display={!imageReady ? 'none' : 'inline'} transform="translateY(50px)" >
            Next
            </Button>
        </Box>
        </>
    )
    
}

export default FlashCard
