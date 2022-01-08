import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from '../../types/Post';
import PostDisplayBannerImage from './PostDisplayBannerImage';

describe('PostDisplayBannerImage', () => {
  const basePost: Post = {
    title: 'title', date: new Date('2023-01-01'), slug: 'slug', content: 'content',
  };

  describe('no banner image', () => {
    beforeEach(() => render(<PostDisplayBannerImage post={basePost} />));

    it('does not render single image', () => {
      expect(screen.queryByTestId('bannerimage')).toBeNull();
    });

    it('does not render image carousel', () => {
      expect(screen.queryByTestId('bannerimagecarousel')).toBeNull();
    });
  });

  describe('single banner image', () => {
    beforeEach(() => render(<PostDisplayBannerImage post={{
      ...basePost,
      bannerImage: '/foo.png',
    }}
    />));

    it('does render single image', () => {
      expect(screen.queryByTestId('bannerimage')).toBeInTheDocument();
    });

    it('does not render image carousel', () => {
      expect(screen.queryByTestId('bannerimagecarousel')).toBeNull();
    });
  });

  describe('banner image carousel', () => {
    beforeEach(() => render(<PostDisplayBannerImage post={{
      ...basePost,
      bannerImage: '/foo.png',
      bannerImageList: ['/foo.png', '/bar.png'],
    }}
    />));

    it('does not render single image', () => {
      expect(screen.queryByTestId('bannerimage')).toBeNull();
    });

    it('does render image carousel', () => {
      expect(screen.queryByTestId('bannerimagecarousel')).toBeInTheDocument();
    });
  });
});
