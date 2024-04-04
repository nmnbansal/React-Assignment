import './App.css';
import { Center, Heading } from '@chakra-ui/react';
import Timer from './Components/Timer';
import React from 'react';


const  App:React.FC=()=> {
  return (
    <>
    <Center>
    <Heading>Timer</Heading>
    </Center>
   <Timer/>
    </>
  );
}

export default App;
