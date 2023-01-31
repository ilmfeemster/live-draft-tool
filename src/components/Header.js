import React from 'react';
import DraftLog from './DraftLog';
import UndoButton from './UndoButton';
import { ButtonGroup, Flex, Spacer, Box } from '@chakra-ui/react';
import { FaFootballBall } from 'react-icons/fa';

const Header = ({ loggedPlayers, undoDraft, lastPick }) => {
  return (
    <Flex style={{ backgroundColor: '#131D2C', width: '100vw' }}>
      <Box
        style={{
          color: '#b9c4d4',
          fontSize: '25px',
          marginLeft: '30px',
        }}
      >
        Live Draft Tool
        <br></br>
        <p style={{ fontSize: '12px' }}>6 Points Passing TD, PPR</p>
      </Box>
      <FaFootballBall
        style={{
          color: 'b9c4d4',
          fontSize: '20px',
          margin: '10px 0px 0px 8px',
        }}
      />
      <Spacer />
      <ButtonGroup
        style={{
          marginRight: '30px',
        }}
      >
        <DraftLog loggedPlayers={loggedPlayers} />
        <UndoButton undoDraft={undoDraft} lastPick={lastPick} />
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
