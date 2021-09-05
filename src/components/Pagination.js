import {useEffect, useState} from 'react'
import {Flex,Button, Heading} from '@chakra-ui/react'
import axios from 'axios'
// state: how many cards we've gone through

function Pagination({deck, component: Component}) {
    // Set current cards
    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1)    
    
    useEffect(() => {
        // import axios, and paginate results in db.json
        if(page <= 50){
            getFlashCards(page);
            console.log('useEffect ran')            
        }
        // setCards(cards)
    },[page])

    const getFlashCards = async (page) => {
        try {
            const res = await axios.get(`http://localhost:3005/states?_page=${page}&_limit=1`);  
            // console.log('res',res)
            setCards((prev) => [...res.data])
            setLoaded(true)
            
            return res.data;  

        } catch (e) {
            console.error(e)
        }
    }

    const handleNext = () => {
        setLoaded(false)
        setPage(prev  => prev + 1)
    }

    if (page <= 50) {
        return loaded && (
            <Flex flexDirection="column" align="center">
                {cards.map(card => <Component key={card.id} cardData={card} handleNext={handleNext} />)}
                {/* <Button onClick={handleNext} alignSelf="mt-auto">
                    Next
                </Button> */}
    
            </Flex>
        )
    } else {
        return (
            <Flex flexDirection="column" align="center">
                <Heading>Cards finished! Good Studying!</Heading>
                <Button onClick={() => window.location.reload()} alignSelf="mt-auto">
                    Home
                </Button>
            </Flex>
        )
    }
}

export default Pagination;
