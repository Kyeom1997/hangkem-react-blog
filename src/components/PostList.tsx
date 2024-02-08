import { Box, HStack, Stack, Text, VStack, chakra } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import React from 'react';

interface PostListProps {
  hasNavigation?: boolean;
}

const PostList = ({ hasNavigation = true }: PostListProps) => {
  return (
    <VStack minH="90vh" p="20px 40px">
      {hasNavigation && (
        <HStack
          p="48px 20px 0px 20px"
          w="100%"
          gap="12px"
          justifyContent="flex-start"
        >
          <Box cursor="pointer">
            <Text fontSize="16px" color="black" fontWeight={600}>
              전체
            </Text>
          </Box>
          <Box cursor="pointer">
            <Text fontSize="16px" color="gray">
              나의 글
            </Text>
          </Box>
        </HStack>
      )}

      {[...Array(10)].map((e, index) => (
        <Stack w="100%" key={index} borderTop="1px solid #f2f2f2" p="20px 0px">
          <PostLink to={`/posts/${index}`}>
            <Box>
              <HStack gap="8px" alignItems="center">
                <Box w="36px" h="36px" borderRadius="50px" bg="#f2f2f2" />
                <Text fontSize="14px">김형겸</Text>
                <Text fontSize="14px" color="gray">
                  2024.02.06 수요일
                </Text>
              </HStack>
            </Box>
            <Stack>
              <HStack>
                <Text fontSize="20px" fontWeight={600}>
                  게시글{index}
                </Text>
              </HStack>
              <HStack spacing={0}>
                <Text color="gray" fontSize="16px">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quibusdam commodi odio dolorem eaque eum provident nobis illum
                  veniam aut natus neque necessitatibus expedita hic aliquid et
                  fuga, dolorum maxime tempora.
                </Text>
              </HStack>
              <HStack
                gap="8px"
                flexDir="row-reverse"
                fontSize="14px"
                color="gray"
              >
                <Text _hover={{ color: 'black' }}>삭제</Text>
                <Text _hover={{ color: 'black' }}>수정</Text>
              </HStack>
            </Stack>
          </PostLink>
        </Stack>
      ))}
    </VStack>
  );
};

export default PostList;

const PostLink = chakra(RouterLink, {
  baseStyle: {
    textDecoration: 'none',
    color: '#000000',
  },
});
