export type Post = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'react-patterns',
    title: 'React Patterns for Scalable Components',
    excerpt:
      'Discover composition techniques and architectural patterns that help large codebases stay maintainable.',
    author: 'Jane Doe',
    publishedAt: '2023-11-12',
    readingTimeMinutes: 8,
    tags: ['react', 'architecture', 'patterns'],
  },
  {
    id: 'typescript-toolbox',
    title: 'My Essential TypeScript Toolbox',
    excerpt:
      'From utility types to strict compiler flags, here are the features I reach for when shipping reliable apps.',
    author: 'Michael Park',
    publishedAt: '2024-02-05',
    readingTimeMinutes: 6,
    tags: ['typescript', 'tooling'],
  },
  {
    id: 'web-performance',
    title: 'A Refresher on Web Performance Fundamentals',
    excerpt:
      'Small adjustments to your bundler and render strategies can deliver big wins. Let’s revisit the essentials.',
    author: 'Sarah Lin',
    publishedAt: '2024-05-21',
    readingTimeMinutes: 5,
    tags: ['performance', 'best practices'],
  },
];
