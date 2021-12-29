import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../types/Post';

export function getPosts() {
  const files = fs.readdirSync(path.join('posts'));

  const posts: Array<Post> = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );

    const {
      data: {
        date,
        description,
        image,
        title,
        slug,
        tags,
      },
    } = matter(markdownWithMeta);

    const post: Post = {
      date: new Date(date),
      description,
      title,
      slug,
      tags,
    };

    if (image) post.image = image;

    return post;
  });

  return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}
