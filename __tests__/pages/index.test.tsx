import { getStaticProps } from '../../pages/index';
import { config } from '../../config';
import * as getStaticPropsForPosts from '../../util/getStaticPropsForPosts';

describe('index', () => {
  describe('getStaticProps', () => {
    let mockGetStaticPropsForPosts: any;

    beforeAll(() => {
      mockGetStaticPropsForPosts = jest.spyOn(getStaticPropsForPosts, 'getStaticPropsForPosts');
      getStaticProps();
    });

    it('should call getStaticPropsForPosts', () => {
      expect(mockGetStaticPropsForPosts).toHaveBeenCalledWith({
        postsPerPage: config.postsPerPage,
      });
    });
  });
});
