import { Post } from '../types/Post';

export function parsePost({
  bannerImage, date, description, title, slug, tags, image,
}: any, content: string): Post {
  const post: Post = {
    bannerImage,
    content,
    date: new Date(date),
    description,
    title,
    slug,
    tags,
  };

  if (image) {
    post.image = Array.isArray(image) ? image[0] : image;
  }

  return post;
}
