import React from 'react';
import { useEffect, useState } from 'react';
import { ChakraProvider, Box, theme, Flex } from '@chakra-ui/react';
import Header from './components/Header';
import YourTeam from './components/YourTeam';
import FullPlayer from './components/FullPlayer';
import RoleList from './components/RoleList';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [players, setPlayers] = useState([]);
  const [draftedPlayers, setDraftedPlayers] = useState([]);
  const [draftButtonColor, setDraftButtonColor] = useState('#004f2d');
  const [qbs, setQbs] = useState([]);
  const [rbs, setRbs] = useState([]);
  const [wrs, setWrs] = useState([]);
  const [tes, setTes] = useState([]);
  const [flexes, setFlexes] = useState([]);
  const [dsts, setDsts] = useState([]);
  const [kickers, setKickers] = useState([]);
  const [benches, setBenches] = useState([]);
  const [draftingTeam, setDraftingTeam] = useState(1);
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [turnCountdown, setTurnCountdown] = useState(0);
  let maxTeams = 3;
  let yourTeam = 1;

  //function to determine draft button color
  //even when executing function before everything, state doesn't update in time
  //writing specific function until bugfix or further draft implementation
  const changeDraftButtonColor = () => {
    // if (
    //   (snakeDirection === 'up' && draftingTeam + 1 === yourTeam) ||
    //   (snakeDirection === 'down' && draftingTeam - 1 === yourTeam)
    // ) {
    //   setDraftButtonColor('#004f2d');
    // } else if (
    //   snakeDirection === 'up' &&
    //   draftingTeam === yourTeam &&
    //   yourTeam === maxTeams
    // ) {
    //   setDraftButtonColor('#004f2d');
    // } else if (
    //   snakeDirection === 'down' &&
    //   draftingTeam === yourTeam &&
    //   yourTeam === 1
    // ) {
    //   setDraftButtonColor('#004f2d');
    // } else {
    //   setDraftButtonColor('#9a031e');
    // }
    if (turnCountdown === 0) {
      setDraftButtonColor('#004f2d');
    } else {
      setDraftButtonColor('#9a031e');
    }
  };

  //functions to keep turn logic when using undo button\
  const countdownLogic = () => {
    if (snakeDirection === 'up') {
      console.log(turnCountdown);
      setTurnCountdown(countdownLogicUp());
      console.log(turnCountdown);
    } else {
      console.log(turnCountdown);
      setTurnCountdown(countdownLogicDown());
      console.log(turnCountdown);
    }
  };

  const countdownLogicUp = () => {
    if (yourTeam < draftingTeam) {
      return maxTeams - yourTeam + (maxTeams - draftingTeam) + 1;
    } else if (yourTeam > draftingTeam) {
      return yourTeam - draftingTeam;
    } else {
      return 0;
    }
  };

  const countdownLogicDown = () => {
    if (yourTeam > draftingTeam) {
      return yourTeam + draftingTeam - 1;
    } else if (yourTeam < draftingTeam) {
      return draftingTeam - yourTeam;
    } else {
      return 0;
    }
  };

  //function to change draft team up or down depending on snake direction
  const snakeSetter = () => {
    if (draftingTeam === maxTeams && snakeDirection === 'up') {
      setSnakeDirection('down');
      setDraftingTeam(maxTeams);
    } else if (draftingTeam === 1 && snakeDirection === 'down') {
      setSnakeDirection('up');
      setDraftingTeam(1);
    }
  };

  //function to be called on draft to change draft team
  const nextTeam = () => {
    if (snakeDirection === 'up') {
      setDraftingTeam(draftingTeam + 1);
      snakeSetter();
    } else {
      setDraftingTeam(draftingTeam - 1);
      snakeSetter();
    }
  };

  const initialDraftButton = () => {
    if (yourTeam > 1) {
      setDraftButtonColor('#9a031e');
    }
  };

  const intialTurnCountdown = () => {
    if (yourTeam > 1) {
      setTurnCountdown(yourTeam - 1);
    }
  };

  //get players from db
  useEffect(() => {
    intialTurnCountdown();
    initialDraftButton();
    axios.get(url).then(res => {
      //sort by value descending and load to state
      res.data.sort((a, b) => b.Average - a.Average);
      setPlayers(res.data);
    });
  }, []);

  //undo picks
  //default lastPick to dummy array containing _id until picks are made.
  let lastPick =
    draftedPlayers[draftedPlayers.length - 1] !== undefined
      ? draftedPlayers[draftedPlayers.length - 1]
      : [{ _id: 1738 }];
  //undo button function
  const undoDraft = undoPlayer => {
    countdownLogic();
    //set undo player to variable to turn into an object
    let undonePlayer = undoPlayer[0];
    //add player back to main list
    setPlayers(players =>
      [undonePlayer, ...players].sort((a, b) => b.Average - a.Average)
    );
    //check team to remove if necessary
    setQbs(qbs.filter(qb => qb[0]._id !== undonePlayer._id));
    setRbs(rbs.filter(rb => rb[0]._id !== undonePlayer._id));
    setWrs(wrs.filter(wr => wr[0]._id !== undonePlayer._id));
    setTes(tes.filter(te => te[0]._id !== undonePlayer._id));
    setFlexes(flexes.filter(flex => flex[0]._id !== undonePlayer._id));
    setDsts(dsts.filter(dst => dst[0]._id !== undonePlayer._id));
    setKickers(kickers.filter(kicker => kicker[0]._id !== undonePlayer._id));
    setBenches(benches.filter(bench => bench[0]._id !== undonePlayer._id));
    // setPlayers([...players].sort((a, b) => b.Average - a.Average));
    //remove player from draft log
    setDraftedPlayers(
      draftedPlayers.filter(draftedPlayer => draftedPlayer !== undoPlayer)
    );
  };

  //removes player from main store, updating player lists and draftlog
  const removePlayer = id => {
    countdownLogic();
    changeDraftButtonColor();
    //removes player from list
    setPlayers(players.filter(player => player._id !== id));
    //adds player to draft log
    setDraftedPlayers(draftedPlayers => [
      ...draftedPlayers,
      players.filter(player => player._id == id),
    ]);
    //drafts player to your team if it is your turn
    if (draftingTeam === yourTeam) {
      draftPlayer(id);
    }
    nextTeam();
  };

  //adds player to your team
  const draftPlayer = id => {
    //assign filter to variable for ease of use in switch case
    let selection = players.filter(player => player._id == id);
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

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Flex direction="column" style={{ backgroundColor: '#162132' }}>
          <Flex height="7vh">
            <Header
              undoDraft={undoDraft}
              lastPick={lastPick}
              draftedPlayers={draftedPlayers}
            />
          </Flex>
          <Box display="flex" justifyContent="space-between" height="60vh">
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
            <FullPlayer
              players={players}
              onRemove={removePlayer}
              draftButtonColor={draftButtonColor}
            />
          </Box>
          <Box
            height="1vh"
            bg="#0F1A2A"
            style={{ borderTop: '2px solid #606f8c66' }}
          ></Box>
          <Box>
            <Flex height="30vh">
              <RoleList players={players} role={'RB'} />
              <RoleList players={players} role={'WR'} />
              <RoleList players={players} role={'TE'} />
              <RoleList players={players} role={'QB'} />
              <RoleList players={players} role={'K'} />
              <RoleList players={players} role={'DST'} />
            </Flex>
          </Box>
          <Footer />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
