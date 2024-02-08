import { Box, HStack, Stack, Text, VStack, chakra } from '@chakra-ui/react';
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

const Profile = () => {
  return (
    <HStack
      alignItems="center"
      margin="0 auto"
      p="20px 40px"
      textAlign="left"
      justifyContent="space-between"
    >
      <HStack fontSize="18px">
        <Box w="72px" h="72px" bg="#f2f2f2" borderRadius="50px" />
        <Stack spacing={0}>
          <Box>
            <Text>test@test.com</Text>
          </Box>
          <Box>
            <Text>김유저</Text>
          </Box>
        </Stack>
      </HStack>
      <StyledLogOutLink to="/">로그아웃</StyledLogOutLink>
    </HStack>
  );
};

export default Profile;

const StyledLogOutLink = chakra(RouterLink, {
  baseStyle: {
    margin: '0px 10px',
    color: 'gray',
    _hover: {
      color: '#000000',
      fontWeight: '600',
    },
  },
});
