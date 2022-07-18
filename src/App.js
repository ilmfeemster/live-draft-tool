import React from 'react';
import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header'
import YourTeam from './components/YourTeam'
import FullPlayer from './components/FullPlayer'
import Lists from './components/Lists'

function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Cooper Kupp',
      value: 10.9,
      team: 'LAR',
      pos: 'WR',
      bw: 7,
      ecr: '1|06',
    },
    {
      id: 2,
      name: 'Jonathan Taylor',
      value: 9.8,
      team: 'IND',
      pos: 'RB',
      bw: 14,
      ecr: '1|01',
    },
    {
      id: 3,
      name: 'Christian McCaffrey',
      value: 9.2,
      team: 'CAR',
      pos: 'RB',
      bw: 13,
      ecr: '1|02',
    },
    {
      id: 4,
      name: 'Justin Jefferson',
      value: 8.5,
      team: 'MIN',
      pos: 'WR',
      bw: 7,
      ecr: '1|08',
    },
    {
      id: 5,
      name: 'Austin Ekeler',
      value: 7.8,
      team: 'LAC',
      pos: 'RB',
      bw: 8,
      ecr: '1|03',
    },
    {
      id: 6,
      name: 'JaMarr Chase',
      value: 7.1,
      team: 'CIN',
      pos: 'WR',
      bw: 10,
      ecr: '2|01',
    },
    {
      id: 7,
      name: 'Lebron James',
      value: 7.0,
      team: 'CIN',
      pos: 'WR',
      bw: 10,
      ecr: '2|01',
    },
    {
      id: 8,
      name: 'Michael Jordan',
      value: 6.9,
      team: 'CIN',
      pos: 'WR',
      bw: 10,
      ecr: '2|01',
    },
    {
      id: 9,
      name: 'Tuco Salamanca',
      value: 6.0,
      team: 'CIN',
      pos: 'WR',
      bw: 10,
      ecr: '2|01',
    },
    {
      id: 10,
      name: 'Snoop Dogg',
      value: 4.2,
      team: 'CIN',
      pos: 'WR',
      bw: 10,
      ecr: '2|01',
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex 
          direction="column">
          <Box
            height="5vh">
            <Header />
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            height="60vh"
            >
            <FullPlayer players={players} />
            <YourTeam />
          </Box>
          <Box
          height="30vh">
            <Lists />
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
