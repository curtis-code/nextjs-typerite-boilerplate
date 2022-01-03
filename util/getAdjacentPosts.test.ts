import { generateTestPosts } from '../__tests__/generateTestPosts.test';
import { getAdjacentPosts } from './getAdjacentPosts';

describe('getAdjacentPosts', () => {
  const posts = generateTestPosts(10);

  describe('middle post', () => {
    let adjacentPosts: any;
    const post = posts[4];

    beforeAll(() => {
      adjacentPosts = getAdjacentPosts(posts, post);
    });

    it('returns previous and next post', () => {
      expect(adjacentPosts).toEqual({
        previous: posts[5],
        next: posts[3],
      });
    });

    it('returns previous post with older date', () => {
      expect(adjacentPosts.previous.date < post.date).toEqual(true);
    });

    it('returns next post with newer date', () => {
      expect(adjacentPosts.next.date > post.date).toEqual(true);
    });
  });

  it('should return next post and no previous post', () => {
    expect(
      getAdjacentPosts(posts, posts[9]),
    ).toEqual({
      previous: null,
      next: posts[8],
    });
  });

  it('should return previous post and no next post', () => {
    expect(
      getAdjacentPosts(posts, posts[0]),
    ).toEqual({
      previous: posts[1],
      next: null,
    });
  });
});
