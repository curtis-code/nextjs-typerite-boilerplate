import { getStaticProps } from '../../../pages/posts/[page]';
import { config } from '../../../config';
import * as getStaticPropsForPosts from '../../../util/getStaticPropsForPosts';

describe('[page]', () => {
  describe('getStaticProps', () => {
    let mockGetStaticPropsForPosts: any;

    beforeAll(() => {
      mockGetStaticPropsForPosts = jest.spyOn(getStaticPropsForPosts, 'getStaticPropsForPosts');
      getStaticProps({ params: { page: '1' } });
    });

    it('should call getStaticPropsForPosts', () => {
      expect(mockGetStaticPropsForPosts).toHaveBeenCalledWith({
        page: 1,
        postsPerPage: config.postsPerPage,
      });
    });
  });
});
