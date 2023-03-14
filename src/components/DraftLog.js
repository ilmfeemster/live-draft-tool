import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Center,
} from '@chakra-ui/react';
import { CgClipboard } from 'react-icons/cg';
import { React, useState } from 'react';

const DraftLog = ({ draftedPlayers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //set state for mouse hover
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <Button
        onClick={onOpen}
        size={{ base: 'xs', sm: 'sm', md: 'md' }}
        style={{
          backgroundColor: isHover ? '#9fb2dd' : '#7584a4',
          color: '#f2f6ff',
          marginTop: '10px',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CgClipboard
          style={{
            fontSize: '16px',
            marginRight: '4px',
          }}
        />
        Draft Log
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={{ backgroundColor: '#162132', color: '#b9c4d4' }}>
          <ModalHeader>
            <Center>Draft Log</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {draftedPlayers.map(playerName => (
                <li
                  style={{ listStyle: 'none', textAlign: 'center' }}
                  key={playerName[0]._id}
                >
                  {playerName[0].Name}
                </li>
              ))}
            </ul>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DraftLog;
