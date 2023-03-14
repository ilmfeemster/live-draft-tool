import React from 'react';
import DraftLog from './DraftLog';
import UndoButton from './UndoButton';
import TurnStats from './TurnStats';
import DraftBoard from './DraftBoard';
import { ButtonGroup, Flex, Spacer, Box } from '@chakra-ui/react';
import { FaFootballBall } from 'react-icons/fa';

const Header = ({
  draftedPlayers,
  undoDraft,
  lastPick,
  draftRound,
  draftPick,
  turnCountdown,
  draftBoard,
}) => {
  return (
    <Flex style={{ backgroundColor: '#131D2C', width: '100vw' }}>
      <Box
        style={{
          color: '#b9c4d4',
          fontSize: '20px',
          marginLeft: '8px',
        }}
      >
        Live Draft Tool
        <br></br>
        <p style={{ fontSize: '12px' }}>6 Points Passing TD, PPR</p>
      </Box>
      <FaFootballBall
        style={{
          color: '#b9c4d4',
          fontSize: '20px',
          margin: '10px 20px 0px 8px',
        }}
      />

      <TurnStats
        draftRound={draftRound}
        draftPick={draftPick}
        turnCountdown={turnCountdown}
      />
      <Spacer />
      <ButtonGroup
        style={{
          marginRight: '30px',
        }}
      >
        <DraftBoard draftBoard={draftBoard} />
        <DraftLog draftedPlayers={draftedPlayers} />
        <UndoButton undoDraft={undoDraft} lastPick={lastPick} />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
