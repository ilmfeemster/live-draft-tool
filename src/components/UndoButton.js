import { React, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaUndo } from 'react-icons/fa';

//id 1738 is the dummy object's id signifying nothing to undo
const UndoButton = ({ undoDraft, lastPick }) => {
  //set state for mouse hover
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Button
      onClick={lastPick[0]._id !== 1738 ? () => undoDraft(lastPick) : undefined}
      size={{ base: 'xs', sm: 'sm', md: 'md' }}
      style={{
        backgroundColor: isHover ? '#9fb2dd' : '#7584a4',
        color: '#f2f6ff',
        marginTop: '10px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
