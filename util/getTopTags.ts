import { Post } from '../types/Post';

interface Tag {
  name: string;
  count: number;
}

export function getTopTags(posts: Array<Post>): Array<Tag> {
  const tags = posts.reduce((acc: any, current: Post) => {
    const t = { ...acc };
    if (current.tags) {
      current.tags.forEach((tag) => {
        t[tag] = (t[tag] ? t[tag] : 0) + 1;
      });
    }

    return t;
  }, {});

  return Object.entries(tags)
    .map(([name, count]) => ({
      name,
      count: Number(count),
    }));
}
