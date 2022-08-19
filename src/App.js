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
  Spacer,
} from '@chakra-ui/react';
import Header from './components/Header';
import YourTeam from './components/YourTeam';
import FullPlayer from './components/FullPlayer';
import RoleList from './components/RoleList';
import DraftLog from './components/DraftLog';
import UndoButton from './components/UndoButton';
import axios from 'axios';

function App() {
  const url = 'http://localhost:3000/api/players';
  //keep log of available players
  const [players, setPlayers] = useState([]);

  //keep log of removed players
  const [loggedPlayers, setLoggedPlayers] = useState([]);

  //keep log of players drafted to your team
  const [teamPlayers, setTeamPlayers] = useState([]);

  //get players from db
  useEffect(() => {
    axios.get(url).then(res => {
      //sort by value descending and load to state
      res.data.sort((a, b) => b.Average - a.Average);
      setPlayers(res.data);
    });
  }, []);

  //undo picks
  //default lastPick to dummy array containing _id until picks are made.
  let lastPick =
    loggedPlayers[loggedPlayers.length - 1] !== undefined
      ? loggedPlayers[loggedPlayers.length - 1]
      : [{ _id: 1738 }];
  //undo button function
  const undoDraft = undoPlayer => {
    let count = loggedPlayers.length - 1;
    //set undo player to variable to turn into an object
    let undonePlayer = undoPlayer[0];
    //add player back to main list
    setPlayers(players => [undonePlayer, ...players]);
    //remove player from draft log
    setLoggedPlayers(
      loggedPlayers.filter(loggedPlayer => loggedPlayer !== undoPlayer)
    );
  };

  //removes player from main store, updating player lists and draftlog
  const removePlayer = id => {
    //removes player from list
    setPlayers(players.filter(player => player._id !== id));
    //adds player to draft log
    setLoggedPlayers(loggedPlayers => [
      ...loggedPlayers,
      players.filter(player => player._id == id),
    ]);
  };

  //adds player to your team
  const draftPlayer = id => {
    //assign filter to variable for ease of use in switch case
    let selection = players.filter(player => player._id == id);
    removePlayer(id);
    //filter returns an array so use [0] to access the properties
    // if statements reflect roster rules(1QB 2RB 2WR 1TE 2Flex 1DST 1Kicker)
    switch (selection[0].Pos) {
      case 'QB':
        if (qbs.length < 1) {
          setQbs(qbs => [...qbs, players.filter(player => player._id == id)]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      case 'RB':
        if (rbs.length < 2) {
          setRbs(rbs => [...rbs, players.filter(player => player._id == id)]);
        } else if (rbs.length >= 2 && flexes.length < 2) {
          setFlexes(flexes => [
            ...flexes,
            players.filter(player => player._id == id),
          ]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      case 'WR':
        if (wrs.length < 2) {
          setWrs(wrs => [...wrs, players.filter(player => player._id == id)]);
        } else if (wrs.length >= 2 && flexes.length < 2) {
          setFlexes(flexes => [
            ...flexes,
            players.filter(player => player._id == id),
          ]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      case 'TE':
        if (tes.length < 1) {
          setTes(tes => [...tes, players.filter(player => player._id == id)]);
        } else if (tes.length >= 1 && flexes.length < 2) {
          setFlexes(flexes => [
            ...flexes,
            players.filter(player => player._id == id),
          ]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      case 'DST':
        if (dsts.length < 1) {
          setDsts(dsts => [
            ...dsts,
            players.filter(player => player._id == id),
          ]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      case 'K':
        if (kickers.length < 1) {
          setKickers(kickers => [
            ...kickers,
            players.filter(player => player._id == id),
          ]);
        } else {
          setBenches(benches => [
            ...benches,
            players.filter(player => player._id == id),
          ]);
        }
        break;
      default:
        console.log(selection[0].Pos);
    }
  };

  // set state for each of the positions
  const [qbs, setQbs] = useState([]);
  const [rbs, setRbs] = useState([]);
  const [wrs, setWrs] = useState([]);
  const [tes, setTes] = useState([]);
  const [flexes, setFlexes] = useState([]);
  const [dsts, setDsts] = useState([]);
  const [kickers, setKickers] = useState([]);
  const [benches, setBenches] = useState([]);

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex direction="column">
          <Flex height="5vh">
            <Header />
            <Spacer />
            <DraftLog loggedPlayers={loggedPlayers} />
            <UndoButton undo={undoDraft} lastPick={lastPick} />
          </Flex>
          <Box display="flex" justifyContent="space-between" height="60vh">
            <FullPlayer
              players={players}
              onDraft={draftPlayer}
              onRemove={removePlayer}
            />
            <YourTeam
              qbs={qbs}
              rbs={rbs}
              wrs={wrs}
              tes={tes}
              flexes={flexes}
              dsts={dsts}
              kickers={kickers}
              benches={benches}
            />
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
