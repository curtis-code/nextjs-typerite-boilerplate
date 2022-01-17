import { getStaticPaths, getStaticProps } from '../../../../pages/tag/[tag]/[page]';
import { config } from '../../../../config';
import * as getStaticPropsForPosts from '../../../../util/getStaticPropsForPosts';
import * as getPosts from '../../../../util/getPosts';
import { generateTestPosts } from '../../../generateTestPosts.test';
import * as getTopTags from '../../../../util/getTopTags';

describe('[tag]/[page]', () => {
  describe('getStaticPaths', () => {
    let staticPaths: any;

    const testPosts = generateTestPosts(50);

    beforeAll(async () => {
      const mockGetPosts = jest.spyOn(getPosts, 'getPosts');
      mockGetPosts.mockImplementation(() => testPosts);
      const mockGetTopTags = jest.spyOn(getTopTags, 'getTopTags');
      mockGetTopTags.mockImplementation(() => [{ name: 'foo', count: 5 }, { name: 'bar', count: 2 }]);
      staticPaths = await getStaticPaths();
    });

    it('returns correct paths', () => {
      expect(staticPaths).toEqual({
        paths: [
          { params: { tag: 'foo', page: '2' } },
          { params: { tag: 'foo', page: '3' } },
          { params: { tag: 'bar', page: '2' } },
          { params: { tag: 'bar', page: '3' } },
        ],
        fallback: false,
      });
    });
  });

  describe('getStaticProps', () => {
    let mockGetStaticPropsForPosts: any;
    const tag = 'foo';

    beforeAll(() => {
      mockGetStaticPropsForPosts = jest.spyOn(getStaticPropsForPosts, 'getStaticPropsForPosts');
      getStaticProps({ params: { page: '1', tag } });
    });

    it('should call getStaticPropsForPosts', () => {
      expect(mockGetStaticPropsForPosts).toHaveBeenCalledWith({
        tag,
        page: 1,
        postsPerPage: config.postsPerPage,
      });
    });
  });
});
