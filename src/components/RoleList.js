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
          background: 'white',
          borderRadius: '24px',
        },
      }}
    >
      <Center>
        <TableContainer sx={{ overflow: 'visible' }}>
          <Table variant="simple" size="sm">
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
                  {role}
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {players
                .filter(player => player.Pos == role)
                .map(filteredPlayer => (
                  <Tr key={filteredPlayer._id}>
                    <Td sx={{ textAlign: 'center' }}>{filteredPlayer.Name}</Td>
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
