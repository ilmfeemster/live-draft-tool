import React from 'react';
import { useEffect, useState } from 'react';
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
import Header from './components/Header';
import YourTeam from './components/YourTeam';
import FullPlayer from './components/FullPlayer';
import RoleList from './components/RoleList';
import axios from 'axios';

function App() {
  const url = 'http://localhost:3000/api/players';
  //Set state to empty to load from database
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get(url).then(res => {
      //sort by value descending and load to state
      res.data.sort((a, b) => b.Average - a.Average);
      setPlayers(res.data);
    });
  }, []);

  const draftPlayer = id => {
    setPlayers(players.filter(player => player._id !== id));
  };

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex direction="column">
          <Box height="5vh">
            <Header />
          </Box>
          <Box display="flex" justifyContent="space-between" height="60vh">
            <FullPlayer players={players} onDraft={draftPlayer} />
            <YourTeam />
          </Box>
          <Box>
            <Flex height="30vh">
              <RoleList players={players} role={'RB'} />
              <RoleList players={players} role={'WR'} />
              <RoleList players={players} role={'TE'} />
              <RoleList players={players} role={'QB'} />
            </Flex>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
