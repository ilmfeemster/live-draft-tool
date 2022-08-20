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

const FullPlayer = ({ players, onDraft, onRemove }) => {
  return (
    <Box
      width="75vw"
      overflowX="hidden"
      overflowY="auto"
      style={{
        backgroundColor: '#f7f7f7',
        borderRight: '1px solid',
        paddingLeft: '4px',
      }}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#f7f7f7',
          borderRadius: '24px',
        },
      }}
    >
      <TableContainer sx={{ overflow: 'visible' }}>
        <Table
          variant="simple"
          style={{
            borderCollapse: 'seperate',
            borderSpacing: '0 10px',
          }}
        >
          <Thead>
            <Tr>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                Team
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                Player Name
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                POS
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                Bye
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                ECR
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                }}
              >
                Value
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
                  zIndex: '1',
                }}
              >
                +/-
              </Th>
            </Tr>
          </Thead>
          <Tbody style={{ backgroundColor: '#c8c8c8' }}>
            {players.map(player => (
              <Tr key={player._id}>
                <Td
                  sx={{
                    textAlign: 'center',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                  }}
                >
                  {player.Tm}
                </Td>
                <Td sx={{ textAlign: 'center' }}>{player.Name}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Pos}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.Bye}</Td>
                <Td sx={{ textAlign: 'center' }}>{player.ECR}</Td>
                <Td
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  {player.Average}
                </Td>
                <Td
                  sx={{
                    textAlign: 'center',
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                  }}
                >
                  <ButtonGroup variant="outline" spacing="1px" size="xs">
                    <Button
                      colorScheme="green"
                      onClick={() => onDraft(player._id)}
                      style={{
                        backgroundColor: '#004f2d',
                        color: 'white',
                        borderColor: '#004f2d',
                      }}
                    >
                      +
                    </Button>
                    <Button
                      colorScheme="red"
                      onClick={() => onRemove(player._id)}
                      style={{
                        backgroundColor: '#9a031e',
                        color: 'white',
                        borderColor: '#9a031e',
                      }}
                    >
                      -
                    </Button>
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
