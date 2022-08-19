import React from 'react';
import { Button } from '@chakra-ui/react';
//id 1738 is the dummy object's id signifying nothing to undo
const UndoButton = ({ undo, lastPick }) => {
  return (
    <Button
      onClick={lastPick[0]._id !== 1738 ? () => undo(lastPick) : undefined}
    >
      Undo
    </Button>
  );
};

export default UndoButton;
