import { Box, HStack, Stack, Text, VStack, chakra } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

const index = () => {
  return (
    <Box>
      <HStack
        p="10px 40px"
        minH="40px"
        alignItems="center"
        flexDirection="row-reverse"
        borderBottom="1px solid #f2f2f2"
      >
        <StyledNavLink to="/profile">프로필</StyledNavLink>
        <StyledNavLink to="/posts">게시글</StyledNavLink>
        <StyledNavLink to="/posts/new">글쓰기</StyledNavLink>
      </HStack>
      <VStack minH="90vh" maxW="680px" p="20px 40px">
        <HStack
          p="48px 20px 0px 20px"
          w="100%"
          gap="12px"
          justifyContent="flex-start"
        >
          <Box cursor="pointer">
            <Text fontSize="16px" color="gray">
              전체
            </Text>
          </Box>
          <Box cursor="pointer">
            <Text fontSize="16px" color="gray">
              나의 글
            </Text>
          </Box>
        </HStack>
        <Box>
          {[...Array(10)].map((e, index) => (
            <Box key={index}>
              <PostLink to={`/posts/${index}`}>
                <Box>
                  <HStack>
                    <Box w="36px" h="36px" borderRadius="50px" bg="#f2f2f2" />
                    <Text>김형겸</Text>
                    <Text>2024.02.06 수요일</Text>
                  </HStack>
                </Box>
                <Stack>
                  <HStack>
                    <Text>게시글{index}</Text>
                  </HStack>
                  <HStack spacing={0}>
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quibusdam commodi odio dolorem eaque eum provident nobis
                      illum veniam aut natus neque necessitatibus expedita hic
                      aliquid et fuga, dolorum maxime tempora.
                    </Text>
                  </HStack>
                  <HStack>
                    <Text>삭제</Text>
                    <Text>수정</Text>
                  </HStack>
                </Stack>
              </PostLink>
            </Box>
          ))}
        </Box>
      </VStack>
      <HStack
        bg="#f2f2f2"
        minH="40px"
        p="20px 40px"
        justifyContent="center"
        flexDir="row-reverse"
        gap="20px"
      >
        <StyledNavLink to="/profile">프로필</StyledNavLink>
        <StyledNavLink to="/posts">게시글</StyledNavLink>
        <StyledNavLink to="/posts/new">글쓰기</StyledNavLink>
      </HStack>
    </Box>
  );
};

export default index;

const StyledNavLink = chakra(RouterLink, {
  baseStyle: {
    margin: '0px 10px',
    textDecoration: 'none',
    color: 'gray',
    _activeLink: {
      color: '#000000',
    },
    _hover: {
      color: '#000000',
    },
  },
});

const PostLink = chakra(RouterLink, {
  baseStyle: {
    textDecoration: 'none',
    color: '#000000',
  },
});
