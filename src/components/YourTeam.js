import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { React } from 'react';

const YourTeam = ({ qbs, rbs, wrs, tes, flexes, dsts, kickers, benches }) => {
  return (
    <Box
      overflowY="auto"
      flexGrow="1"
      style={{
        border: '6px solid #162132',
        borderRadius: '20px',
        backgroundColor: '#212C3D',
      }}
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#212C3D',
          borderRadius: '24px',
        },
      }}
    >
      <TableContainer
        sx={{
          maxWidth: '25vw',
          overflow: 'visible',
          width: '100%',
        }}
      >
        <Table variant="simple" size="sm" sx={{ color: '#b9c4d4' }}>
          <Thead>
            <Tr>
              <Th
                sx={{
                  textAlign: 'left',
                  width: '40px',
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#212C3D',
                  color: '#b9c4d4',
                  borderColor: '#b9c4d4',
                }}
              >
                POS
              </Th>
              <Th
                sx={{
                  textAlign: 'left',
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#212C3D',
                  color: '#b9c4d4',
                  borderColor: '#b9c4d4',
                }}
              >
                Player
              </Th>
              <Th
                sx={{
                  textAlign: 'left',
                  width: '44px',
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#212C3D',
                  color: '#b9c4d4',
                  borderColor: '#b9c4d4',
                }}
              >
                Bye
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {qbs.map(yourQb => {
              return (
                qbs && (
                  <Tr key={yourQb[0]._id}>
                    <Td sx={{ borderColor: '#b9c4d4' }}>QB</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                        borderColor: '#b9c4d4',
                      }}
                    >
                      {yourQb[0].Name}
                    </Td>
                    <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                      {yourQb[0].Bye}
                    </Td>
                  </Tr>
                )
              );
            })}
            {rbs.map(yourRb => (
              <Tr key={yourRb[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>RB</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourRb[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourRb[0].Bye}
                </Td>
              </Tr>
            ))}
            {rbs.map(yourRb => {
              {
                rbs.length > 2 && (
                  <Tr key={yourRb[1]._id}>
                    <Td sx={{ borderColor: '#b9c4d4' }}>RB</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                        borderColor: '#b9c4d4',
                      }}
                    >
                      {yourRb[1].Name}
                    </Td>
                    <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                      {yourRb[1].Bye}
                    </Td>
                  </Tr>
                );
              }
            })}
            {wrs.map(yourWr => (
              <Tr key={yourWr[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>WR</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourWr[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourWr[0].Bye}
                </Td>
              </Tr>
            ))}
            {wrs.map(yourWr => {
              {
                wrs.length > 2 && (
                  <Tr key={yourWr[1]._id}>
                    <Td sx={{ borderColor: '#b9c4d4' }}>WR</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                        borderColor: '#b9c4d4',
                      }}
                    >
                      {yourWr[1].Name}
                    </Td>
                    <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                      {yourWr[1].Bye}
                    </Td>
                  </Tr>
                );
              }
            })}
            {tes.map(yourTe => (
              <Tr key={yourTe[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>TE</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourTe[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourTe[0].Bye}
                </Td>
              </Tr>
            ))}
            {flexes.map(yourFlex => (
              <Tr key={yourFlex[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>Flex</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourFlex[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourFlex[0].Bye}
                </Td>
              </Tr>
            ))}
            {flexes.map(yourFlex => {
              {
                flexes > 1 && (
                  <Tr key={yourFlex[1]._id}>
                    <Td sx={{ borderColor: '#b9c4d4' }}>Flex</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                        borderColor: '#b9c4d4',
                      }}
                    >
                      {yourFlex[1].Name}
                    </Td>
                    <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                      {yourFlex[1].Bye}
                    </Td>
                  </Tr>
                );
              }
            })}
            {dsts.map(yourDst => (
              <Tr key={yourDst[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>DST</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourDst[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourDst[0].Bye}
                </Td>
              </Tr>
            ))}
            {kickers.map(yourKicker => (
              <Tr key={yourKicker[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>K</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourKicker[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourKicker[0].Bye}
                </Td>
              </Tr>
            ))}
            {benches.map(yourBench => (
              <Tr key={yourBench[0]._id}>
                <Td sx={{ borderColor: '#b9c4d4' }}>BN</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                    borderColor: '#b9c4d4',
                  }}
                >
                  {yourBench[0].Name}
                </Td>
                <Td sx={{ textAlign: 'right', borderColor: '#b9c4d4' }}>
                  {yourBench[0].Bye}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default YourTeam;
