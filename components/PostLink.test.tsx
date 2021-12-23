import React from 'react';
import { render, screen } from '@testing-library/react';
import PostLink from './PostLink';
import { Post } from '../types/Post';

describe('PostLink', () => {
  const post: Post = {
    date: new Date('2021-02-03 11:35'),
    title: 'post title',
    slug: 'post-title',
  };

  describe('base', () => {
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
      expect(
        screen.getByRole('link', {
          name: post.title,
        }).closest('a'),
      ).toHaveAttribute('href', `/post/${post.slug}`);
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

    it('renders formatted date', () => {
      expect(
        screen.getByRole('link', {
          name: 'Feb 3, 2021',
        }),
      ).toBeInTheDocument();
    });

    it('renders date link', () => {
      expect(
        screen.getByRole('link', {
          name: 'Feb 3, 2021',
        }),
      ).toHaveAttribute('href', `/post/${post.slug}`);
    });

    describe('hidden elements', () => {
      it('does not render thumbnail component', () => {
        expect(
          screen.queryByTestId('postthumbnail'),
        ).toBeNull();
      });
    });
  });

  describe('with image', () => {
    const postWithImage: Post = {
      ...post,
      image: '/images/foo.jpg',
    };

    beforeEach(() => {
      render(<PostLink post={postWithImage} />);
    });

    it('does render thumbnail component', () => {
      expect(
        screen.queryByTestId('postthumbnail'),
      ).toBeTruthy();
    });

    it('renders image', () => {
      expect(
        screen.getByRole('img'),
      ).toHaveAttribute('src', post.image);
    });
  });
});
