import { Post } from '../types/Post';

export function generateTestPost(): Post {
  return {
    title: 'title',
    slug: 'slug',
    date: new Date('2023-01-01'),
    tags: [],
    content: 'content',
    image: '/foo.png',
  };
}

describe('generateTestPost', () => {
  it('returns test posts', () => {
    expect(generateTestPost()).toEqual({
      title: 'title',
      slug: 'slug',
      date: new Date('2023-01-01'),
      tags: [],
      content: 'content',
      image: '/foo.png',
    });
  });
});
