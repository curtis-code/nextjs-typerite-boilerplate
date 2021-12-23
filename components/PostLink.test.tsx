import React from 'react';
import { render, screen } from '@testing-library/react';
import PostLink from './PostLink';
import { Post } from '../types/Post';

describe('PostLink', () => {
  const post: Post = {
    title: 'post title',
    slug: 'post-title',
  };

  beforeEach(() => {
    render(<PostLink post={post} />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: post.title,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders heading link', () => {
    expect(screen.getByRole('link', {
      name: post.title,
    }).closest('a')).toHaveAttribute('href', `/post/${post.slug}`);
  });

  it('renders Design tag', () => {
    const designTag = screen.getByRole('link', {
      name: 'Design',
    });

    expect(designTag).toBeInTheDocument();
  });

  it('renders Design tag href', () => {
    const designTag = screen.getByRole('link', {
      name: 'Design',
    });

    expect(designTag).toHaveAttribute('href', 'category.html');
  });
});
