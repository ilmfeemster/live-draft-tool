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

const FullPlayer = ({ players, onRemove, draftButtonColor }) => {
  return (
    <Box
      width="75vw"
      overflowX="hidden"
      overflowY="auto"
      style={{
        backgroundColor: '#162132',
        paddingLeft: '4px',
        borderBottom: '6px solid #162132',
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      }}
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#162132',
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
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                Team
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                Player Name
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                POS
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                Bye
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                ECR
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              >
                Value
              </Th>
              <Th
                sx={{
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#162132',
                  textAlign: 'center',
                  zIndex: '1',
                  color: '#b9c4d4',
                  borderColor: '#0F1A2A',
                }}
              ></Th>
            </Tr>
          </Thead>
          <Tbody style={{ backgroundColor: '#212C3D', color: '#b9c4d4' }}>
            {players.map(player => (
              <Tr key={player._id}>
                <Td
                  sx={{
                    textAlign: 'center',
                    borderTopLeftRadius: '5px',
                    borderBottomLeftRadius: '5px',
                    borderColor: '#0F1A2A',
                  }}
                >
                  {player.Tm}
                </Td>
                <Td sx={{ textAlign: 'center', borderColor: '#0F1A2A' }}>
                  {player.Name}
                </Td>
                <Td sx={{ textAlign: 'center', borderColor: '#0F1A2A' }}>
                  {player.Pos}
                </Td>
                <Td sx={{ textAlign: 'center', borderColor: '#0F1A2A' }}>
                  {player.Bye}
                </Td>
                <Td sx={{ textAlign: 'center', borderColor: '#0F1A2A' }}>
                  {player.ECR}
                </Td>
                <Td
                  sx={{
                    textAlign: 'center',
                    borderColor: '#0F1A2A',
                  }}
                >
                  {player.Average}
                </Td>
                <Td
                  sx={{
                    textAlign: 'center',
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                    borderColor: '#0F1A2A',
                  }}
                >
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => onRemove(player._id)}
                    style={{
                      backgroundColor: `${draftButtonColor}`,
                      color: 'white',
                      borderColor: '#9a031e',
                    }}
                  >
                    Draft
                  </Button>
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
