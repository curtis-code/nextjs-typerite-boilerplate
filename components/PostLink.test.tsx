import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
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

      it('does not render tags component', () => {
        expect(
          screen.queryByTestId('tags'),
        ).toBeNull();
      });

      it('does not description component', () => {
        expect(
          screen.queryByTestId('description'),
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

  describe('with tags', () => {
    const postWithTags: Post = {
      ...post,
      tags: ['foo', 'bar', 'baz'],
    };

    beforeEach(() => {
      render(<PostLink post={postWithTags} />);
    });

    it('does render tags component', () => {
      expect(
        screen.queryByTestId('tags'),
      ).toBeTruthy();
    });

    it('renders first tag', () => {
      expect(
        screen.getByRole('link', {
          name: 'foo',
        }),
      ).toHaveAttribute('href', '/tag/foo');
    });

    it('renders second tag', () => {
      expect(
        screen.getByRole('link', {
          name: 'bar',
        }),
      ).toHaveAttribute('href', '/tag/bar');
    });

    it('does not render third tag', () => {
      expect(
        screen.queryByRole('link', {
          name: 'baz',
        }),
      ).toBeNull();
    });
  });

  describe('with description', () => {
    const postWithDescription: Post = {
      ...post,
      description: 'lorem ipsum',
    };

    beforeEach(() => {
      render(<PostLink post={postWithDescription} />);
    });

    it('does render description component', () => {
      expect(
        screen.queryByTestId('description'),
      ).toBeTruthy();
    });

    it('renders description text', () => {
      expect(
        within(
          screen.getByTestId('description'),
        ).getByText(postWithDescription.description || ''),
      ).toBeTruthy();
    });
  });
});
