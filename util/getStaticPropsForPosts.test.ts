import { Post } from '../types/Post';
import { StaticPropsForPosts } from '../types/StaticPropsForPosts';
import { getStaticPropsForPosts } from './getStaticPropsForPosts';
import * as getPosts from './getPosts';

function generateTestPosts(): Array<Post> {
  const posts: Array<Post> = [];
  for (let i = 0; i < 50; i += 1) {
    const date: Date = new Date('2023-01-01');
    date.setDate(date.getDate() - i);

    const post: Post = {
      title: `title ${i}`,
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

  const topTags = [
    { name: 'bar', count: 37 },
    { name: 'foo', count: 33 },
  ];

  beforeAll(() => {
    const mockGetPosts = jest.spyOn(getPosts, 'getPosts');
    mockGetPosts.mockImplementation(() => testPosts);
  });

  describe('base', () => {
    const baseProps = {
      recentPosts,
      topTags,
      pageCount: 10,
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

  describe('tags', () => {
    const tag = 'foo';
    const baseProps = {
      recentPosts,
      tag,
      topTags,
      pageCount: 7,
    };

    describe('tag "foo" / default page 1', () => {
      let staticPropsForPosts: StaticPropsForPosts;

      beforeAll(() => {
        staticPropsForPosts = getStaticPropsForPosts({
          tag,
          postsPerPage: 5,
        });
      });

      it('should return static props', () => {
        expect(staticPropsForPosts).toEqual({
          props: {
            ...baseProps,
            page: 1,
            posts: [
              testPosts[1],
              testPosts[2],
              testPosts[4],
              testPosts[5],
              testPosts[7],
            ],
          },
        });
      });
    });

    describe('tag "foo" page 2', () => {
      let staticPropsForPosts: StaticPropsForPosts;

      beforeAll(() => {
        staticPropsForPosts = getStaticPropsForPosts({
          tag,
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
              testPosts[8],
              testPosts[10],
              testPosts[11],
              testPosts[13],
              testPosts[14],
            ],
          },
        });
      });
    });
  });
});
