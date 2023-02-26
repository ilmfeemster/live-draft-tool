import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

function TurnStats({ draftRound, draftPick, turnCountdown }) {
  return (
    <Flex color="#b9c4d4" direction="column" fontSize="lg" pt="6px">
      <Box>
        PICK: {draftRound}.{draftPick}
      </Box>
      <Box> Turns Until Next Pick: {turnCountdown}</Box>
    </Flex>
  );
}

export default TurnStats;
