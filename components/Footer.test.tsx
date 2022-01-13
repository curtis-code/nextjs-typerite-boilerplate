import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { config } from '../config';

describe('Footer', () => {
  it('renders correct copyright title and year', () => {
    jest.spyOn(Date, 'now').mockImplementation(() => new Date('2030-01-01').getTime());

    render(<Footer />);

    expect(
      screen.getByTestId('copyright').textContent,
    ).toEqual(`© Copyright ${config.title} 2030`);
  });
});
