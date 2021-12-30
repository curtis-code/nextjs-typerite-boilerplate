import { Post } from '../types/Post';
import { getTopTags } from './getTopTags';

describe('getTopTags', () => {
  it('should return an empty array', () => {
    expect(getTopTags([])).toEqual([]);
  });

  it('should return tags with correct count', () => {
    const basePost: Post = { title: 'title', date: new Date('2022-01-01'), slug: 'slug' };
    const posts: Array<Post> = [
      { ...basePost, tags: ['foo'] },
      { ...basePost, tags: ['foo', 'bar'] },
      { ...basePost, tags: ['foo', 'bar', 'baz'] },
      { ...basePost, tags: ['foo', 'bar', 'baz', 'qux'] },
      { ...basePost, tags: ['foo', 'bar', 'baz', 'qux', 'quux'] },
      { ...basePost, tags: ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz'] },
    ];

    expect(getTopTags(posts)).toEqual([
      { name: 'foo', count: 6 },
      { name: 'bar', count: 5 },
      { name: 'baz', count: 4 },
      { name: 'qux', count: 3 },
      { name: 'quux', count: 2 },
      { name: 'quuz', count: 1 },
    ]);
  });
});
