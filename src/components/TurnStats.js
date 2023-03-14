import React from 'react';
import { Flex, Box, Show, Spacer } from '@chakra-ui/react';

function TurnStats({ draftRound, draftPick, turnCountdown }) {
  return (
    <Flex
      color="#b9c4d4"
      direction={{ lg: 'column' }}
      fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      pt="6px"
    >
      <Box>
        PICK: {draftRound}.{draftPick}
      </Box>
      <Show below="lg">
        <Spacer />
      </Show>
      <Box> Turns Until Next Pick: {turnCountdown}</Box>
    </Flex>
  );
}

export default TurnStats;
