import { getStaticProps } from '../../../pages/tag/[tag]';
import { config } from '../../../config';
import * as getStaticPropsForPosts from '../../../util/getStaticPropsForPosts';

describe('[tag]', () => {
  describe('getStaticProps', () => {
    let mockGetStaticPropsForPosts: any;
    const tag = 'foo';

    beforeAll(() => {
      mockGetStaticPropsForPosts = jest.spyOn(getStaticPropsForPosts, 'getStaticPropsForPosts');
      getStaticProps({ params: { tag } });
    });

    it('should call getStaticPropsForPosts', () => {
      expect(mockGetStaticPropsForPosts).toHaveBeenCalledWith({
        tag,
        postsPerPage: config.postsPerPage,
      });
    });
  });
});
