import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '../../types/Post';
import PostDisplay from './PostDisplay';

describe('PostDisplay', () => {
  describe('Posts', () => {
    const post: Post = {
      title: 'Post Title A', date: new Date('2022-01-30'), slug: 'a', tags: ['foo-tag', 'bar-tag', 'baz-tag'], content: 'foo',
    };

    beforeEach(() => {
      render(<PostDisplay post={post} />);
    });

    it('renders post title', () => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });

    it('renders formatted date', () => {
      expect(screen.getByText('Jan 30, 2022')).toBeInTheDocument();
    });

    it('renders first tag twice', () => {
      expect(screen.getAllByText('foo-tag')).toHaveLength(2);
    });

    it('renders second tag twice', () => {
      expect(screen.getAllByText('bar-tag')).toHaveLength(2);
    });

    it('renders third tag once', () => {
      expect(screen.getAllByText('baz-tag')).toHaveLength(1);
    });
  });
});
