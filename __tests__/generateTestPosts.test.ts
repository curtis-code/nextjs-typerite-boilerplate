import { Post } from '../types/Post';

export function generateTestPosts(postCount: number = 50): Array<Post> {
  const posts: Array<Post> = [];
  for (let i = 0; i < postCount; i += 1) {
    const date: Date = new Date('2023-01-01');
    date.setDate(date.getDate() - i);

    const post: Post = {
      title: `title ${i}`,
      slug: `slug-${i}`,
      date,
      tags: [],
    };

    if (i % 3) { post.tags?.push('foo'); }
    if (i % 4) { post.tags?.push('bar'); }

    posts.push(post);
  }
  return posts;
}

describe('generateTestPosts', () => {
  let testPosts;

  beforeAll(() => {
    testPosts = generateTestPosts();
  });

  it('returns test posts', () => {
    expect(testPosts.length).toEqual(50);
  });
});
