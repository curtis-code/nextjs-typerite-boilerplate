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
    if (Array.isArray(image)) {
      // eslint-disable-next-line prefer-destructuring
      post.image = image[0];
      post.imageList = image;
    } else {
      post.image = image;
    }
  }

  return post;
}
