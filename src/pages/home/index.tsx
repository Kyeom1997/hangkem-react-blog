import { Box } from '@chakra-ui/react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostList from '../../components/PostList';

const index = () => {
  return (
    <Box>
      <Header />
      <PostList />
      <Footer />
    </Box>
  );
};

export default index;
