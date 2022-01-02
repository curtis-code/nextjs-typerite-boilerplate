import { Post } from '../types/Post';
import { StaticPropsForPosts } from '../types/StaticPropsForPosts';
import { getStaticPropsForPosts } from './getStaticPropsForPosts';
import * as getPosts from './getPosts';

function generateTestPosts(): Array<Post> {
  const posts: Array<Post> = [];
  for (let i = 1; i <= 100; i += 1) {
    const date: Date = new Date('2023-01-01');
    date.setDate(date.getDate() - i);

    const post: Post = {
      title: i.toString(),
      slug: i.toString(),
      date,
      tags: [],
    };

    if (i % 3) { post.tags?.push('foo'); }
    if (i % 4) { post.tags?.push('bar'); }

    posts.push(post);
  }
  return posts;
}

jest.mock('./getPosts');

describe('getStaticPropsForPosts', () => {
  const testPosts: Array<Post> = generateTestPosts();

  const recentPosts: Array<Post> = [
    testPosts[0],
    testPosts[1],
    testPosts[2],
    testPosts[3],
    testPosts[4],
  ];

  beforeAll(() => {
    const mockGetPosts = jest.spyOn(getPosts, 'getPosts');
    mockGetPosts.mockImplementation(() => testPosts);
  });

  describe('base', () => {
    const baseProps = {
      recentPosts,
      topTags: [
        { name: 'bar', count: 75 },
        { name: 'foo', count: 67 },
      ],
      pageCount: 20,
    };

    describe('default / page 1', () => {
      let staticPropsForPosts: StaticPropsForPosts;

      beforeAll(() => {
        staticPropsForPosts = getStaticPropsForPosts({
          postsPerPage: 5,
        });
      });

      it('should return static props', () => {
        expect(staticPropsForPosts).toEqual({
          props: {
            ...baseProps,
            page: 1,
            posts: [
              testPosts[0],
              testPosts[1],
              testPosts[2],
              testPosts[3],
              testPosts[4],
            ],
          },
        });
      });
    });

    describe('page 2', () => {
      let staticPropsForPosts: StaticPropsForPosts;

      beforeAll(() => {
        staticPropsForPosts = getStaticPropsForPosts({
          page: 2,
          postsPerPage: 5,
        });
      });

      it('should return static props', () => {
        expect(staticPropsForPosts).toEqual({
          props: {
            ...baseProps,
            page: 2,
            posts: [
              testPosts[5],
              testPosts[6],
              testPosts[7],
              testPosts[8],
              testPosts[9],
            ],
          },
        });
      });
    });
  });
});
