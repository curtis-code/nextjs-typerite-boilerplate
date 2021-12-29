import { Post } from '../types/Post';
import { getAppLayoutProps } from './getAppLayoutProps';

describe('getAppLayoutProps', () => {
  const posts: Array<Post> = [
    { title: 'a', date: new Date('2021-01-30'), slug: 'a' },
    { title: 'b', date: new Date('2021-01-29'), slug: 'b' },
    { title: 'c', date: new Date('2021-01-28'), slug: 'c' },
    { title: 'd', date: new Date('2021-01-27'), slug: 'd' },
    { title: 'e', date: new Date('2021-01-26'), slug: 'e' },
    { title: 'f', date: new Date('2021-01-25'), slug: 'f' },
    { title: 'g', date: new Date('2021-01-24'), slug: 'g' },
    { title: 'h', date: new Date('2021-01-23'), slug: 'h' },
    { title: 'i', date: new Date('2021-01-22'), slug: 'i' },
    { title: 'j', date: new Date('2021-01-21'), slug: 'j' },
  ];

  let appLayoutProps: any;

  beforeAll(() => {
    appLayoutProps = getAppLayoutProps(posts);
  });

  it('should include recent posts', () => {
    expect(appLayoutProps.recentPosts).toEqual([
      { title: 'a', date: new Date('2021-01-30'), slug: 'a' },
      { title: 'b', date: new Date('2021-01-29'), slug: 'b' },
      { title: 'c', date: new Date('2021-01-28'), slug: 'c' },
      { title: 'd', date: new Date('2021-01-27'), slug: 'd' },
      { title: 'e', date: new Date('2021-01-26'), slug: 'e' },
    ]);
  });
});
