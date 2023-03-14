import React from 'react';
import DraftLog from './DraftLog';
import UndoButton from './UndoButton';
import TurnStats from './TurnStats';
import DraftBoard from './DraftBoard';
import { ButtonGroup, Flex, Spacer, Box, Show, Text } from '@chakra-ui/react';
import { FaFootballBall } from 'react-icons/fa';

const MobileHeader = ({
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
      <Text
        fontSize={{
          base: '16px',
          sm: '18px',
          md: '20px',
          lg: '22px',
        }}
        style={{
          color: '#b9c4d4',
          marginLeft: '8px',
        }}
      >
        Live Draft Tool
        <br></br>
        <Text fontSize={{ base: '10px', sm: '12px' }}>
          6 Points Passing TD, PPR
        </Text>
      </Text>
      <Show above="sm">
        <FaFootballBall
          style={{
            color: '#b9c4d4',
            fontSize: '20px',
            margin: '10px 20px 0px 8px',
          }}
        />
      </Show>
      <Spacer />
      <Flex direction="column" justify="end" marginRight="4px">
        <ButtonGroup>
          <DraftBoard draftBoard={draftBoard} />
          <DraftLog draftedPlayers={draftedPlayers} />
          <UndoButton undoDraft={undoDraft} lastPick={lastPick} />
        </ButtonGroup>
        <TurnStats
          draftRound={draftRound}
          draftPick={draftPick}
          turnCountdown={turnCountdown}
        />
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
