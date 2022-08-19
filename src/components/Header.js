import React from 'react';
import DraftLog from './DraftLog';
import UndoButton from './UndoButton';
import { ButtonGroup, Flex, Spacer, Box } from '@chakra-ui/react';
import { FaFootballBall } from 'react-icons/fa';

const Header = ({ loggedPlayers, undoDraft, lastPick }) => {
  return (
    <Flex style={{ backgroundColor: '#14213d', width: '100vw' }}>
      <Box
        style={{
          color: '#f2f6ff',
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
          color: '#f2f6ff',
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
