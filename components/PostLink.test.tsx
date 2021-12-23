import React from 'react';
import { render, screen } from '@testing-library/react';
import PostLink from './PostLink';

describe('PostLink', () => {
  beforeEach(() => {
    render(<PostLink />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: 'Just a Standard Format Post.',
    });

    expect(heading).toBeInTheDocument();
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
