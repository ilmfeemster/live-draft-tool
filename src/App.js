import React from 'react';
import { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import Header from './components/Header';
import YourTeam from './components/YourTeam';
import FullPlayer from './components/FullPlayer';
import RoleList from './components/RoleList';
import Footer from './components/Footer';
import axios from 'axios';
import InitialForm from './components/InitialForm';

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
  const [draftingTeam, setDraftingTeam] = useState(1);
  const [snakeDirection, setSnakeDirection] = useState('up');
  const [turnCountdown, setTurnCountdown] = useState();
  const [maxTeams, setMaxTeams] = useState(null);
  const [yourTeam, setYourTeam] = useState(1);
  const [startDraft, setStartDraft] = useState(false);
  const [draftRound, setDraftRound] = useState(1);
  const [draftPick, setDraftPick] = useState(1);
  const [draftBoard, setDraftBoard] = useState([]);
  const [draftRounds, setDraftRounds] = useState();
  //import chakraui modal prop for function passed to modal component
  const { onClose } = useDisclosure();

  const generateDraftBoard = () => {
    let tempGrid = [];
    for (let i = 1; i <= draftRounds; i++) {
      let row = [];
      for (let j = 1; j <= maxTeams; j++) {
        if (i % 2 !== 0) {
          row.push({
            pickNumber: `${i}.${j}`,
            name: 'Himothy Turner',
            team: 'US',
            pos: 'OG',
            tileColor: '',
          });
        } else {
          row.unshift({
            pickNumber: `${i}.${j}`,
            name: 'Wardell Tarik',
            team: 'SEN',
            pos: 'OP',
            tileColor: '',
          });
        }
      }
      tempGrid.push(row);
    }
    console.log(tempGrid);
    setDraftBoard(tempGrid);
  };

  //initial draft form submit function
  const handleSubmit = event => {
    event.preventDefault();
    setStartDraft(true);
    onClose();
    generateDraftBoard();
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

  const undoFunctions = () => {
    undoNextTeam();
    undoDraftButtonColor();
    undoDraftNumberCounter();
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
        <Flex direction="column" style={{ backgroundColor: '#162132' }}>
          <Flex height="7vh">
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
