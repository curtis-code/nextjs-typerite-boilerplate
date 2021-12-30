import { AppLayoutProps } from '../components/AppLayout';
import { Post } from '../types/Post';
import { getTopTags } from './getTopTags';

export function getAppLayoutProps(posts: Array<Post>): AppLayoutProps {
  return {
    recentPosts: posts.slice(0, 5),
    topTags: getTopTags(posts).slice(0, 6),
  };
}
