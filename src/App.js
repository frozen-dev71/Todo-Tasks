import './App.css';
import { useState, useEffect, createContext } from 'react';
import { IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  	// chakraui color mode
  const { colorMode, setColorMode } = useColorMode();



  return (
    <VStack p={5} mx="auto" maxW={{ base: '90vw', sm: '80vw', md: '70vw', lg: '600px' }}>

    <IconButton 
    			icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          alignSelf="flex-end"
          size="lg"
          isRound
          onClick={setColorMode}
    />


    </VStack>
  );
}

export default App;
