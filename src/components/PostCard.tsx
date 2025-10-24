import React from 'react';
import { Post } from '../data/posts';
import { TagList } from './TagList';

type PostCardProps = {
  post: Post;
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="post-card">
      <header className="post-card__header">
        <p className="post-card__meta">
          <span>{formattedDate}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readingTimeMinutes} min read</span>
        </p>
        <h2>{post.title}</h2>
      </header>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <footer className="post-card__footer">
        <span className="post-card__author">By {post.author}</span>
        <TagList tags={post.tags} />
      </footer>
    </article>
  );
};
