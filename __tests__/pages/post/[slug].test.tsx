import * as getPosts from '../../../util/getPosts';
import { getStaticPaths, getStaticProps } from '../../../pages/post/[slug]';
import { generateTestPosts } from '../../generateTestPosts.test';

describe('[slug]', () => {
  const testPosts = generateTestPosts().slice(0, 2);

  beforeAll(() => {
    const mockGetPosts = jest.spyOn(getPosts, 'getPosts');
    mockGetPosts.mockImplementation(() => testPosts);
  });

  describe('getStaticPaths', () => {
    let staticPaths: any;

    beforeAll(async () => {
      staticPaths = await getStaticPaths();
    });

    it('returns correct paths', () => {
      expect(staticPaths).toEqual({
        paths: [
          { params: { slug: 'slug-0' } },
          { params: { slug: 'slug-1' } },
        ],
        fallback: false,
      });
    });
  });

  describe('getStaticProps', () => {
    let staticProps: any;
    const slug = 'slug-1';

    beforeAll(async () => {
      staticProps = await getStaticProps({ params: { slug } });
    });

    it('returns correct props', () => {
      const post = testPosts.find((p) => p.slug === slug)
      expect(staticProps).toEqual({
        props: {
          post,
        },
      });
    });
  });
});
