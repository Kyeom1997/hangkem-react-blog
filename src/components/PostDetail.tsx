import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const PostDetail = () => {
  return (
    <Box>
      <Stack
        maxW="1080px"
        minH="90vh"
        p="20px"
        m="0 auto"
        textAlign="left"
        lineHeight="24px"
        spacing={1}
      >
        <HStack>
          <Text fontSize="36px" fontWeight={600} lineHeight="40px">
            게시글 제목
          </Text>
        </HStack>
        <HStack gap="8px" alignItems="center">
          <Box w="36px" h="36px" borderRadius="50px" bg="#f2f2f2" />
          <Text fontSize="14px">김형겸</Text>
          <Text fontSize="14px" color="gray">
            2024.02.06 수요일
          </Text>
        </HStack>
        <HStack
          gap="8px"
          flexDir="row"
          fontSize="14px"
          color="gray"
          borderTop="1px solid #f2f2f2"
          borderBottom="1px solid #f2f2f2"
        >
          <Text _hover={{ color: 'black' }}>삭제</Text>
          <Text _hover={{ color: 'black' }}>수정</Text>
        </HStack>
        <HStack>
          <Text color="gray" fontSize="16px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            commodi odio dolorem eaque eum provident nobis illum veniam aut
            natus neque necessitatibus expedita hic aliquid et fuga, dolorum
            maxime tempora.
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default PostDetail;
