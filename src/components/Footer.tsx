import { HStack, chakra } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
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
  );
};

export default Footer;

const StyledNavLink = chakra(RouterLink, {
  baseStyle: {
    margin: '0px 10px',
    textDecoration: 'none',
    color: 'gray',
    _activeLink: {
      color: '#000000',
      fontWeight: '600',
    },
    _hover: {
      color: '#000000',
      fontWeight: '600',
    },
  },
});
