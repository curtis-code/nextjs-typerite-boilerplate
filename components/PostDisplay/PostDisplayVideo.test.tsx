import React from 'react';
import { render, screen } from '@testing-library/react';
import PostDisplayVideo from './PostDisplayVideo';

describe('PostDisplayVideo', () => {
  const videoUrl = 'https://videourl';

  beforeAll(() => {
    render(<PostDisplayVideo videoUrl={videoUrl} />);
  });

  it('renders iframe with correct src', () => {
    expect(screen.getByTitle('video embed').getAttribute('src')).toEqual(videoUrl);
  });
});
