import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { PostCard } from './components/PostCard';
import { posts } from './data/posts';

const App: React.FC = () => {
  return (
    <Layout
      title="Fresh updates from the Hangkem engineering team"
      subtitle="Thoughts on React, TypeScript, and building delightful user experiences."
    >
      <section className="post-grid" aria-label="Featured blog posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
};

export default App;
