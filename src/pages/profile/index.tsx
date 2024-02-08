import React from 'react';
import Profile from '../../components/Profile';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PostList from '../../components/PostList';

const index = () => {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
};

export default index;
