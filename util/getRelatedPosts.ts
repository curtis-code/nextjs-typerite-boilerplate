import { Post } from '../types/Post';

export function getRelatedPosts(posts: Array<Post>, post: Post): Array<Post> {
  if (!post.tags || !post.tags.length) return [];

  return posts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => Boolean(p.image))
    .filter((p) => p.tags && p.tags.some((t) => post.tags!.includes(t)))
    .slice(0, 3);
}
