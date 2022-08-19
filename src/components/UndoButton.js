import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaUndo } from 'react-icons/fa';
//id 1738 is the dummy object's id signifying nothing to undo
const UndoButton = ({ undoDraft, lastPick }) => {
  return (
    <Button
      onClick={lastPick[0]._id !== 1738 ? () => undoDraft(lastPick) : undefined}
      style={{
        backgroundColor: '#7584a4',
        color: '#f2f6ff',
        marginTop: '10px',
      }}
    >
      <FaUndo
        style={{
          fontSize: '12px',
          marginRight: '4px',
        }}
      />
      Undo
    </Button>
  );
};

export default UndoButton;
