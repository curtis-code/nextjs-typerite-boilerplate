import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';
import { SocialType } from '../types/SocialType';

describe('SocialLinks', () => {
  describe('no social links', () => {
    beforeAll(() => render(<SocialLinks socialLinks={[]} />));

    it('renders empty', () => {
      expect(screen.queryByTestId('sociallinks')).toBeNull();
    });
  });

  describe('has social links', () => {
    const socialLinks = [
      {
        type: SocialType.stackoverflow,
        url: 'https://foo.com',
      },
    ];

    beforeAll(() => render(<SocialLinks socialLinks={socialLinks} />));

    it('renders social links', () => {
      expect(screen.queryByTestId('sociallinks')).toBeInTheDocument();
    });
  });
});
