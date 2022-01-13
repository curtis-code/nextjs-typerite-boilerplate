import React from 'react';
import { render } from '@testing-library/react';
import * as generatePageTitle from '../util/generatePageTitle';
import { generateTestPosts } from '../__tests__/generateTestPosts.test';
import AppLayout from './AppLayout';

jest.mock('../util/generatePageTitle');

describe('AppLayout', () => {
  const recentPosts = generateTestPosts(5);
  const topTags = [{ name: 'foo', count: 5 }, { name: 'bar', count: 2 }];
  const mockGeneratePageTitle = jest.spyOn(generatePageTitle, 'generatePageTitle');

  beforeAll(() => {
    mockGeneratePageTitle.mockImplementation(() => 'foo');
    render(
      <AppLayout recentPosts={recentPosts} topTags={topTags} pageTitlePrefix="titleprefix">
        <p>test content</p>
      </AppLayout>,
    );
  });

  it('calls generatePageTitle', () => {
    expect(mockGeneratePageTitle).toHaveBeenCalledWith({ prefix: 'titleprefix' });
  });
});
