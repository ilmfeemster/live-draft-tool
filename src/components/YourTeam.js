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
import { React, useState } from 'react';

const YourTeam = ({ qbs, rbs, wrs, tes, flexes, dsts, kickers, benches }) => {
  return (
    <Box
      overflowY="auto"
      flexGrow="1"
      style={{
        borderTop: '6px solid',
        backgroundColor: '#f7f7f7',
        borderColor: '#f7f7f7',
      }}
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
      <TableContainer
        sx={{
          maxWidth: '25vw',
          overflow: 'visible',
          width: '100%',
        }}
      >
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th
                sx={{
                  textAlign: 'left',
                  width: '40px',
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
                  textAlign: 'left',
                  position: 'sticky',
                  top: '0px',
                  backgroundColor: '#f7f7f7',
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
                  backgroundColor: '#f7f7f7',
                  textAlign: 'center',
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
                    <Td>QB</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                      }}
                    >
                      {yourQb[0].Name}
                    </Td>
                    <Td>{yourQb[0].Bye}</Td>
                  </Tr>
                )
              );
            })}
            {rbs.map(yourRb => (
              <Tr key={yourRb[0]._id}>
                <Td>RB</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourRb[0].Name}
                </Td>
                <Td>{yourRb[0].Bye}</Td>
              </Tr>
            ))}
            {rbs.map(yourRb => {
              {
                rbs.length > 2 && (
                  <Tr key={yourRb[1]._id}>
                    <Td>RB</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                      }}
                    >
                      {yourRb[1].Name}
                    </Td>
                    <Td>{yourRb[1].Bye}</Td>
                  </Tr>
                );
              }
            })}
            {wrs.map(yourWr => (
              <Tr key={yourWr[0]._id}>
                <Td>WR</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourWr[0].Name}
                </Td>
                <Td>{yourWr[0].Bye}</Td>
              </Tr>
            ))}
            {wrs.map(yourWr => {
              {
                wrs.length > 2 && (
                  <Tr key={yourWr[1]._id}>
                    <Td>WR</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                      }}
                    >
                      {yourWr[1].Name}
                    </Td>
                    <Td>{yourWr[1].Bye}</Td>
                  </Tr>
                );
              }
            })}
            {tes.map(yourTe => (
              <Tr key={yourTe[0]._id}>
                <Td>TE</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourTe[0].Name}
                </Td>
                <Td>{yourTe[0].Bye}</Td>
              </Tr>
            ))}
            {flexes.map(yourFlex => (
              <Tr key={yourFlex[0]._id}>
                <Td>Flex</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourFlex[0].Name}
                </Td>
                <Td>{yourFlex[0].Bye}</Td>
              </Tr>
            ))}
            {flexes.map(yourFlex => {
              {
                flexes > 1 && (
                  <Tr key={yourFlex[1]._id}>
                    <Td>Flex</Td>
                    <Td
                      sx={{
                        maxWidth: '130px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'noWrap',
                      }}
                    >
                      {yourFlex[1].Name}
                    </Td>
                    <Td>{yourFlex[1].Bye}</Td>
                  </Tr>
                );
              }
            })}
            {dsts.map(yourDst => (
              <Tr key={yourDst[0]._id}>
                <Td>DST</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourDst[0].Name}
                </Td>
                <Td>{yourDst[0].Bye}</Td>
              </Tr>
            ))}
            {kickers.map(yourKicker => (
              <Tr key={yourKicker[0]._id}>
                <Td>K</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourKicker[0].Name}
                </Td>
                <Td>{yourKicker[0].Bye}</Td>
              </Tr>
            ))}
            {benches.map(yourBench => (
              <Tr key={yourBench[0]._id}>
                <Td>BN</Td>
                <Td
                  sx={{
                    maxWidth: '130px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'noWrap',
                  }}
                >
                  {yourBench[0].Name}
                </Td>
                <Td>{yourBench[0].Bye}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default YourTeam;
