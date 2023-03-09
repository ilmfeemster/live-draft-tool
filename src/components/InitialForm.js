import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { React, useState } from 'react';
const InitialForm = ({
  handleSubmit,
  maxTeams,
  yourTeam,
  setMaxTeams,
  setYourTeam,
  setDraftRounds,
}) => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent style={{ backgroundColor: '#162132', color: '#b9c4d4' }}>
        <ModalHeader>
          <Center>Welcome To Live Draft Tool</Center>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel textAlign={'center'}>Drafting Teams</FormLabel>
              <NumberInput
                mb="20px"
                max={14}
                onChange={value => setMaxTeams(parseInt(value))}
              >
                <NumberInputField></NumberInputField>
              </NumberInput>
            </FormControl>
            <FormControl isRequired>
              <FormLabel textAlign={'center'}>Your Team #</FormLabel>
              <NumberInput
                mb="20px"
                max={14}
                onChange={value => setYourTeam(parseInt(value))}
              >
                <NumberInputField></NumberInputField>
              </NumberInput>
            </FormControl>
            <FormControl isRequired>
              <FormLabel textAlign={'center'}>Draft Rounds</FormLabel>
              <NumberInput
                mb="20px"
                max={20}
                onChange={value => setDraftRounds(parseInt(value))}
              >
                <NumberInputField></NumberInputField>
              </NumberInput>
            </FormControl>
            <Center>
              <Button
                style={{
                  backgroundColor: isHover ? '#9fb2dd' : '#7584a4',
                  color: '#f2f6ff',
                  marginTop: '10px',
                  marginBottom: '20px',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="submit"
                onClick={onClose}
              >
                Start Draft
              </Button>
            </Center>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InitialForm;
