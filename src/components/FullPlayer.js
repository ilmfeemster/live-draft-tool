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
                }}
              >
                Team
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                }}
              >
                Player Name
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                }}
              >
                Bye-Week
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                }}
              >
                ECR
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                }}
              >
                Value
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: 'white',
                  zIndex: '1',
                }}
              >
                +/-
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {players.map(player => (
              <Tr key={player.id}>
                <Td>{player.team}</Td>
                <Td>{player.name}</Td>
                <Td>{player.bw}</Td>
                <Td>{player.ecr}</Td>
                <Td>{player.value}</Td>
                <Td>
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
