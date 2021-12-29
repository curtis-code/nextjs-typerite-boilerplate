import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  const firstPagePath: string = '/foo';

  describe('currentPage = first page', () => {
    beforeEach(() => {
      render(<Pagination firstPagePath={firstPagePath} currentPage={1} pageCount={10} />);
    });

    it('does not render a previous page link', () => {
      expect(screen.queryByRole('link', {
        name: 'Prev',
      })).toBeNull();
    });

    it('does render a next page link', () => {
      expect(screen.getByRole('link', {
        name: 'Next',
      })).toBeInTheDocument();
    });
  });

  describe('currentPage = last page', () => {
    beforeEach(() => {
      render(<Pagination firstPagePath={firstPagePath} currentPage={10} pageCount={10} />);
    });

    it('does render a previous page link', () => {
      expect(screen.getByRole('link', {
        name: 'Prev',
      })).toBeInTheDocument();
    });

    it('does not render a next page link', () => {
      expect(screen.queryByRole('link', {
        name: 'Next',
      })).toBeNull();
    });
  });
});
