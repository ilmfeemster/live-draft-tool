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
  Flex,
  Box,
} from '@chakra-ui/react';
import { CgMenuGridR } from 'react-icons/cg';
import { React, useState } from 'react';

const DraftBoard = ({ draftBoard }) => {
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
        <CgMenuGridR
          style={{
            fontSize: '16px',
            marginRight: '4px',
          }}
        />
        Draft Board
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent
          maxW="100vw"
          style={{ backgroundColor: '#162132', color: '#b9c4d4' }}
        >
          <ModalHeader>
            <Center>Draft Board</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction={'column'} gap={'3px'} color={'#012047'}>
              {draftBoard.map(draftRow => (
                <Flex
                  justify={'center'}
                  gap={'3px'}
                  margin="auto"
                  paddingRight="24px"
                >
                  {draftRow.map(draftCell => (
                    <Flex
                      bg={`${draftCell.tileColor}`}
                      direction={'column'}
                      justify={'space-between'}
                      minH={'48px'}
                      minW={'120px'}
                      maxW={'120px'}
                      style={{
                        border: '1px solid  black',
                        minWidth: '120px',
                        borderRadius: '4px',
                      }}
                    >
                      <Flex
                        justify="space-between"
                        minW="100px"
                        pl={'4px'}
                        pr={'4px'}
                      >
                        <Box fontSize={'12px'}>({draftCell.pickNumber})</Box>{' '}
                        <Box>
                          {draftCell.team}
                          {draftCell.pos}
                        </Box>
                      </Flex>
                      <Box
                        pl={'4px'}
                        pr={'4px'}
                        overflowX={'hidden'}
                        whiteSpace={'nowrap'}
                        sx={{ textOverflow: 'ellipsis' }}
                      >
                        {draftCell.name}
                      </Box>
                    </Flex>
                  ))}
                </Flex>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DraftBoard;
