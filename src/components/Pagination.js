import {useEffect, useState} from 'react'
import {Flex,Button} from '@chakra-ui/react'
import axios from 'axios'
// state: how many cards we've gone through
// 

function Pagination({deck, component: Component}) {
    // Set current cards
    const [cards, setCards] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1)    
    
    useEffect(() => {
        // import axios, and paginate results in db.json
        getFlashCards(page);
        console.log('useEffect ran')
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

    return loaded ? (
        <Flex flexDirection="column" align="center">
            {loaded && cards.map(card => <Component key={card.id} cardData={card} />)}
            <Button onClick={handleNext}>
                Next
            </Button>
        </Flex>
    ) : 'Loading'
}

export default Pagination;
