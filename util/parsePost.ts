import { Post } from '../types/Post';

export function parsePost({
  audio, bannerImage, date, description, disqusid, title, slug, tags, image, video,
}: any, content: string): Post {
  const post: Post = {
    content,
    date: new Date(date),
    description,
    disqusid,
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

  if (bannerImage) {
    if (Array.isArray(bannerImage)) {
      // eslint-disable-next-line prefer-destructuring
      post.bannerImage = bannerImage[0];
      post.bannerImageList = bannerImage;
    } else {
      post.bannerImage = bannerImage;
    }
  }

  if (audio) post.audioUrl = audio;
  if (video) post.videoUrl = video;

  return post;
}
