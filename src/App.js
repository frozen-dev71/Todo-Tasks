import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  	// chakraui color mode
  const { colorMode, setColorMode } = useColorMode();
	//define todos array and initial data form local storage.
	const [ todos, setTodos ] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  	// Add
	const handleAddTodo = (todo) => {
		if (todo.priority) {
			setTodos([ todo, ...todos ]);
		} else {
			setTodos([ ...todos, todo ]);
		}
	};

  return (
    <VStack p={5} mx="auto" maxW={{ base: '90vw', sm: '80vw', md: '70vw', lg: '600px' }}>

    <IconButton 
    			icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
          alignSelf="flex-end"
          size="lg"
          isRound
          onClick={setColorMode}
    />
    			<Heading
				as="h1"
				size="xl"
				fontWeight="extrabold"
				bgGradient="linear(to-l, #7928CA, #FF0080)"
        _hover={{
          bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}
				bgClip="text"
				marginBottom="1.3rem !important"
			>
				To-Do Tasks
			</Heading>



    </VStack>
  );
}

export default App;
