import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  list,
  Center,
} from '@chakra-ui/react';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import React from 'react';

const DraftLog = ({ loggedPlayers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        style={{
          backgroundColor: '#7584a4',
          color: '#f2f6ff',
          marginTop: '10px',
        }}
      >
        <RiBarChartHorizontalFill
          style={{
            fontSize: '12px',
            marginRight: '4px',
          }}
        />
        Draft Log
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>Draft Log</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
              {loggedPlayers.map(playerName => (
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
