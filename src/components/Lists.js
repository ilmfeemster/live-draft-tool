import React from 'react';
import RoleList from './RoleList';
import { Flex } from '@chakra-ui/react';

const Lists = () => {
  return (
    <Flex justify="space-between">
      <RoleList />
      <RoleList />
      <RoleList />
      <RoleList />
    </Flex>
  );
};

export default Lists;
