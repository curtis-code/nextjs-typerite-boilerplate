import React from 'react';
import { render, screen } from '@testing-library/react';
import PostLink from './PostLink';

describe('PostLink', () => {
  beforeAll(() => {
    render(<PostLink />);
  });

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: 'Just a Standard Format Post.',
    });

    expect(heading).toBeInTheDocument();
  });
});
