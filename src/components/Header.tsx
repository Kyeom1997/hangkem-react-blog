import { Box, HStack, chakra } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <HStack
      p="10px"
      minH="40px"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #f2f2f2"
    >
      <StyledLogo to="/">Hangkemlog</StyledLogo>
      <Box>
        <StyledNavLink to="/profile">프로필</StyledNavLink>
        <StyledNavLink to="/posts">게시글</StyledNavLink>
        <StyledNavLink to="/posts/new">글쓰기</StyledNavLink>
      </Box>
    </HStack>
  );
};

export default Header;

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

const StyledLogo = chakra(RouterLink, {
  baseStyle: {
    margin: '0px 10px',
    fontWeight: '600',
    fontSize: '20px',
    fontStyle: 'Italic',
    textDecoration: 'none',
    color: '#000000',
  },
});
