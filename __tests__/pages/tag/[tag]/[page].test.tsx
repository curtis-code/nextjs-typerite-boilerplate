import { getStaticProps } from '../../../../pages/tag/[tag]/[page]';
import { config } from '../../../../config';
import * as getStaticPropsForPosts from '../../../../util/getStaticPropsForPosts';

describe('[tag]/[page]', () => {
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
