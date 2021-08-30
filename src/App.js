import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import FlashCard from './components/FlashCard';
import Pagination from './components/Pagination';
import cardData from './components/cardData';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Box>
              <Pagination cards={cardData} />
            </Box>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
