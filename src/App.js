import React from 'react';
import { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  useDisclosure,
  Show,
} from '@chakra-ui/react';
import Header from './components/Header';
import YourTeam from './components/YourTeam';
import FullPlayer from './components/FullPlayer';
import RoleList from './components/RoleList';
import Footer from './components/Footer';
import axios from 'axios';
import InitialForm from './components/InitialForm';
import MobileHeader from './components/MobileHeader';

function App() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [players, setPlayers] = useState([]);
  const [draftedPlayers, setDraftedPlayers] = useState([]);
  const [draftButtonColor, setDraftButtonColor] = useState('#04b9a5');
  const [qbs, setQbs] = useState([]);
  const [rbs, setRbs] = useState([]);
  const [wrs, setWrs] = useState([]);
  const [tes, setTes] = useState([]);
  const [flexes, setFlexes] = useState([]);
  const [dsts, setDsts] = useState([]);
  const [kickers, setKickers] = useState([]);
  const [benches, setBenches] = useState([]);
  const [draftedPlayer, setDraftedPlayer] = useState();
  const [draftingTeam, setDraftingTeam] = useState(1);
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [turnCountdown, setTurnCountdown] = useState();
  const [maxTeams, setMaxTeams] = useState(null);
  const [yourTeam, setYourTeam] = useState(1);
  const [startDraft, setStartDraft] = useState(false);
  const [draftRound, setDraftRound] = useState(1);
  const [draftPick, setDraftPick] = useState(1);
  const [lastDraftRound, setLastDraftRound] = useState();
  const [lastDraftPick, setLastDraftPick] = useState();
  const [draftBoard, setDraftBoard] = useState([]);
  const [draftRounds, setDraftRounds] = useState();
  //import chakraui modal prop for function passed to modal component
  const { onClose } = useDisclosure();

  const generateDraftBoard = () => {
    let startGrid = [];
    for (let i = 1; i <= draftRounds; i++) {
      let row = [];
      for (let j = 1; j <= maxTeams; j++) {
        if (i % 2 !== 0) {
          row.push({
            pickNumber: `${i}.${j}`,
            name: '',
            team: '',
            pos: '',
            tileColor: '#5e6d8b',
          });
        } else {
          row.unshift({
            pickNumber: `${i}.${j}`,
            name: '',
            team: '',
            pos: '',
            tileColor: '#5e6d8b',
          });
        }
      }
      startGrid.push(row);
    }
    setDraftBoard(startGrid);
  };

  //initial draft form submit function
  const handleSubmit = event => {
    event.preventDefault();
    setStartDraft(true);
    onClose();
    generateDraftBoard();
  };

  const draftBoardTileColor = role => {
    if (role === 'RB') {
      return '#8df1ca';
    } else if (role === 'WR') {
      return '#55c9f8';
    } else if (role === 'TE') {
      return '#ffae58';
    } else if (role === 'QB') {
      return '#ef74a2';
    } else if (role === 'DST') {
      return '#be745d';
    } else {
      return ' #b4b9fe';
    }
  };

  //keep track of next draft pick
  useEffect(() => {
    if (draftingTeam !== yourTeam) {
      setDraftButtonColor('#9a031e');
    } else {
      setDraftButtonColor('#04b9a5');
    }
    if (snakeDirection === 'up') {
      if (yourTeam < draftingTeam) {
        setTurnCountdown(maxTeams - draftingTeam + 1);
      } else if (yourTeam > draftingTeam) {
        setTurnCountdown(yourTeam - draftingTeam);
      } else {
        setTurnCountdown(0);
      }
    } else {
      if (yourTeam > draftingTeam) {
        setTurnCountdown(yourTeam + draftingTeam - 1);
      } else if (yourTeam < draftingTeam) {
        setTurnCountdown(draftingTeam - yourTeam);
      } else {
        setTurnCountdown(0);
      }
    }
  }, [
    draftingTeam,
    yourTeam,
    maxTeams,
    snakeDirection,
    draftButtonColor,
    turnCountdown,
  ]);

  //change draft team up or down depending on snake direction
  const snakeSetter = () => {
    if (draftingTeam === maxTeams && snakeDirection === 'up') {
      setSnakeDirection('down');
      setDraftingTeam(maxTeams);
    } else if (draftingTeam === 1 && snakeDirection === 'down') {
      setSnakeDirection('up');
      setDraftingTeam(1);
    }
  };

  //change draft team
  const nextTeam = () => {
    if (snakeDirection === 'up') {
      setDraftingTeam(draftingTeam + 1);
      snakeSetter();
    } else {
      setDraftingTeam(draftingTeam - 1);
      snakeSetter();
    }
  };

  //track pick number
  const draftNumberCounter = () => {
    if (draftPick === maxTeams) {
      setDraftRound(draftRound + 1);
      setDraftPick(1);
    } else {
      setDraftPick(draftPick + 1);
    }
  };

  //undo, snake setting, pick number, and button color for undo button

  const undoSnakeSetter = () => {
    if (draftingTeam === maxTeams && snakeDirection === 'down') {
      setSnakeDirection('up');
      setDraftingTeam(maxTeams);
    } else if (draftingTeam === 1 && snakeDirection === 'up') {
      setSnakeDirection('down');
      setDraftingTeam(1);
    }
  };

  const undoNextTeam = () => {
    if (snakeDirection === 'down' && draftingTeam === maxTeams) {
      undoSnakeSetter();
    } else if (snakeDirection === 'up' && draftingTeam === 1) {
      undoSnakeSetter();
    } else if (snakeDirection === 'down') {
      setDraftingTeam(draftingTeam + 1);
      undoSnakeSetter();
    } else {
      setDraftingTeam(draftingTeam - 1);
      undoSnakeSetter();
    }
  };

  const undoDraftButtonColor = () => {
    if (draftingTeam !== yourTeam) {
      setDraftButtonColor('#9a031e');
    } else {
      setDraftButtonColor('#04b9a5');
    }
  };

  const undoDraftNumberCounter = () => {
    if (draftPick === 1) {
      setDraftRound(draftRound - 1);
      setDraftPick(maxTeams);
    } else {
      setDraftPick(draftPick - 1);
    }
  };

  const undoLastDraftNumberCounter = () => {
    if (lastDraftPick === 1) {
      setLastDraftRound(lastDraftRound - 1);
      setLastDraftPick(maxTeams);
    } else {
      setLastDraftPick(lastDraftPick - 1);
    }
  };

  const undoDraftBoard = () => {
    const nextDraftBoard = draftBoard.map(row => {
      return row.map(player => {
        if (player.pickNumber === `${lastDraftRound}.${lastDraftPick}`) {
          player.name = '';
          player.team = '';
          player.pos = '';
          player.tileColor = '#5e6d8b';
          return player;
        } else {
          return player;
        }
      });
    });
    setDraftBoard(nextDraftBoard);
    undoLastDraftNumberCounter();
  };

  const undoFunctions = () => {
    undoNextTeam();
    undoDraftButtonColor();
    undoDraftNumberCounter();
    undoDraftBoard();
  };

  //get players from db
  useEffect(() => {
    if (startDraft) {
      axios.get(url).then(res => {
        //sort by value descending and load to state
        res.data.sort((a, b) => b.Average - a.Average);
        setPlayers(res.data);
      });
    }
  }, [startDraft]);

  //undo picks
  //default lastPick to dummy array containing _id until picks are made.
  let lastPick =
    draftedPlayers[draftedPlayers.length - 1] !== undefined
      ? draftedPlayers[draftedPlayers.length - 1]
      : [{ _id: 1738 }];
  //undo button function
  const undoDraft = undoPlayer => {
    undoFunctions();
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
    let thisPlayer = players.filter(player => player._id == id);
    setDraftedPlayer(thisPlayer);
    //removes player from list
    setPlayers(players.filter(player => player._id !== id));
    //adds player to draft log
    setDraftedPlayers(draftedPlayers => [...draftedPlayers, thisPlayer]);
    //drafts player to your team if it is your turn
    if (draftingTeam === yourTeam) {
      draftPlayer(id);
    }
    const nextDraftBoard = draftBoard.map(row => {
      return row.map(player => {
        if (player.pickNumber === `${draftRound}.${draftPick}`) {
          player.name = thisPlayer[0].Name;
          player.team = `${thisPlayer[0].Tm} • `;
          player.pos = thisPlayer[0].Pos;
          player.tileColor = draftBoardTileColor(thisPlayer[0].Pos);
          return player;
        } else {
          return player;
        }
      });
    });
    setLastDraftRound(draftRound);
    setLastDraftPick(draftPick);
    setDraftBoard(nextDraftBoard);
    draftNumberCounter();
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
        <InitialForm
          handleSubmit={handleSubmit}
          maxTeams={maxTeams}
          yourTeam={yourTeam}
          setMaxTeams={setMaxTeams}
          setYourTeam={setYourTeam}
          setDraftRounds={setDraftRounds}
        />
        <Flex
          direction="column"
          h="100vh"
          style={{ backgroundColor: '#162132' }}
        >
          <Show above="lg">
            <Flex height="62px">
              <Header
                undoDraft={undoDraft}
                lastPick={lastPick}
                draftedPlayers={draftedPlayers}
                draftRound={draftRound}
                draftPick={draftPick}
                turnCountdown={turnCountdown}
                draftBoard={draftBoard}
              />
            </Flex>
          </Show>
          <Show below="lg">
            <MobileHeader
              undoDraft={undoDraft}
              lastPick={lastPick}
              draftedPlayers={draftedPlayers}
              draftRound={draftRound}
              draftPick={draftPick}
              turnCountdown={turnCountdown}
              draftBoard={draftBoard}
            />
          </Show>
          <Flex justifyContent="space-between" h="400px" flexGrow="1">
            <Show above="lg">
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
            </Show>
            <FullPlayer
              players={players}
              onRemove={removePlayer}
              draftButtonColor={draftButtonColor}
            />
          </Flex>
          <Show above="xl">
            <Box
              height="1vh"
              bg="#0F1A2A"
              style={{ borderTop: '2px solid #606f8c66' }}
            ></Box>
            <Box>
              <Flex>
                <RoleList players={players} role={'RB'} />
                <RoleList players={players} role={'WR'} />
                <RoleList players={players} role={'TE'} />
                <RoleList players={players} role={'QB'} />
                <RoleList players={players} role={'K'} />
                <RoleList players={players} role={'DST'} />
              </Flex>
            </Box>
          </Show>
          <Footer />
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
