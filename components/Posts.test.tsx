import React from 'react';
import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import { Post } from '../types/Post';

describe('Posts', () => {
  const posts: Array<Post> = [
    { title: 'Post Title A', date: new Date('2021-01-30'), slug: 'a' },
    { title: 'Post Title B', date: new Date('2021-01-30'), slug: 'b' },
    { title: 'Post Title C', date: new Date('2021-01-30'), slug: 'c' },
    { title: 'Post Title D', date: new Date('2021-01-30'), slug: 'd' },
  ];

  beforeEach(() => {
    render(<Posts page={1} posts={posts} pageCount={1} />);
  });

  it.each(posts.map((post) => [post.title]))('renders post "%s"', (postTitle) => {
    expect(
      screen.getByText(postTitle),
    ).toBeInTheDocument();
  });
});
