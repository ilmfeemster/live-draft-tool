import React from 'react';
import {
  Box,
  Center,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spacer,
  Flex,
} from '@chakra-ui/react';

const RoleList = ({ players, role }) => {
  return (
    <Box
      overflowY="auto"
      flexGrow="1"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#0F1A2A',
          borderRadius: '24px',
        },
      }}
      style={{ backgroundColor: '#0F1A2A', borderTop: '3px solid #606f8c66' }}
      sx={{ maxWidth: '17%' }}
    >
      <Center>
        <TableContainer sx={{ overflow: 'visible' }}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th
                  borderColor="#0F1A2A"
                  sx={{
                    position: 'sticky',
                    top: '0px',
                    backgroundColor: '#162132',
                    textAlign: 'center',
                    color: '#b9c4d4',
                    borderRadius: '2px',
                  }}
                >
                  {role}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {players
                .filter(player => player.Pos === role)
                .map(filteredPlayer => (
                  <Tr key={filteredPlayer._id}>
                    <Flex
                      justifyContent="space-between"
                      bg="#212C3D"
                      color="#b9c4d4"
                      style={{ borderRadius: '3px', marginBottom: '2px' }}
                    >
                      <Td borderColor="#212C3D" sx={{ textAlign: 'left' }}>
                        {filteredPlayer.Name}
                      </Td>
                      <Td
                        borderColor="#212C3D"
                        sx={{ textAlign: 'left', minWidth: '60px' }}
                      >
                        {filteredPlayer.Tm}
                      </Td>
                    </Flex>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Box>
  );
};

export default RoleList;
