import React from 'react';

type TagListProps = {
  tags: string[];
};

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="tag-list" aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          #{tag}
        </li>
      ))}
    </ul>
  );
};
