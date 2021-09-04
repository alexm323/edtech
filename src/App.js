import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Pagination from './components/Pagination';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import states from './decks/statesDeck';
import FlashCard from './components/FlashCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Box>
              
              <Pagination deck={states} component={FlashCard} />
            </Box>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
