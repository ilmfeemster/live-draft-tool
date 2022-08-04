import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

const FullPlayer = ({ players }) => {
  return (
    <Box
      width="80vw"
      overflowY="auto"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'gray',
          borderRadius: '24px',
        },
      }}
    >
      <TableContainer sx={{ overflow: 'visible' }}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                Team
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                Player Name
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                POS
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                Bye
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                ECR
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                Value
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                  zIndex: '1',
                }}
              >
                +/-
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {players.map(player => (
              <Tr key={player._id}>
                <Td sx={{ textAlign: 'center' }}>{player.Tm}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Name}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Pos}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Bye}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.ECR}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Average}</Td>
                <Td sx={{ textAlign: 'center' }}>
                  <ButtonGroup variant="outline" spacing="0" size="xs">
                    <Button colorScheme="green">+</Button>
                    <Button colorScheme="red">-</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FullPlayer;
