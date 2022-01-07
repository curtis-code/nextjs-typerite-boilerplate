import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '../../types/Post';
import PostLinkImage from './PostLinkImage';

describe('PostLinkImage', () => {
  const post: Post = {
    date: new Date('2021-02-03 11:35'),
    title: 'post title',
    slug: 'post-title',
    content: 'foo',
  };

  describe('no image', () => {
    it('does not render image', () => {
      render(<PostLinkImage post={post} />);
      expect(screen.queryByTestId('postthumbnail')).toBeNull();
    });
  });

  describe('with image', () => {
    const postWithImage: Post = {
      ...post,
      image: '/images/foo.jpg',
    };

    beforeEach(() => {
      render(<PostLinkImage post={postWithImage} />);
    });

    it('does render thumbnail component', () => {
      expect(
        screen.queryByTestId('postthumbnail'),
      ).toBeTruthy();
    });

    it('renders link for image', () => {
      expect(
        screen.getByTestId('postthumbnail-link'),
      ).toHaveAttribute('href', `/post/${post.slug}`);
    });

    it('renders image', () => {
      expect(
        screen.getByRole('img'),
      ).toHaveAttribute('src', post.image);
    });
  });

  describe('with multiple images', () => {
    const postWithImages: Post = {
      ...post,
      image: '/images/foo.jpg',
      imageList: ['/images/foo.jpg', '/images/bar.jpg'],
    };

    beforeEach(() => {
      render(<PostLinkImage post={postWithImages} />);
    });

    it('does render thumbnail component', () => {
      expect(
        screen.queryByTestId('postimagecarousel'),
      ).toBeInTheDocument();
    });
  });
});
