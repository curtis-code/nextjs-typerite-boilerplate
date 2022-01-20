import { config } from '../config';
import { Post } from '../types/Post';
import { getPosts } from './getPosts';

const generateRssItem = (post: Post): string => `
  <item>
    <guid>${config.url}/post/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${config.url}/post/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

export const generateRssFeedContent = (): string => {
  const posts: Array<Post> = getPosts();
  return `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${config.title}</title>
      <link>${config.url}</link>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <description></description>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;
};
