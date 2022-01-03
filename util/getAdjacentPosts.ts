import { Post } from '../types/Post';

interface IAdjacentPosts {
  previous: Post | null,
  next: Post | null,
}

function getPreviousPost(sortedPosts: Array<Post>, postDate: Date): (Post | null) {
  const previousPosts = sortedPosts.filter((p) => p.date < postDate);
  return previousPosts.length ? previousPosts.reduce((a, t) => (t.date > a.date ? t : a)) : null;
}

function getNextPost(sortedPosts: Array<Post>, postDate: Date): (Post | null) {
  const previousPosts = sortedPosts.filter((p) => p.date > postDate);
  return previousPosts.length ? previousPosts.reduce((a, t) => (t.date < a.date ? t : a)) : null;
}

export function getAdjacentPosts(posts: Array<Post>, post: Post): IAdjacentPosts {
  const sortedPosts = posts.sort((a, b) => b.date.getTime() - a.date.getTime());

  return {
    previous: getPreviousPost(sortedPosts, post.date),
    next: getNextPost(sortedPosts, post.date),
  };
}
