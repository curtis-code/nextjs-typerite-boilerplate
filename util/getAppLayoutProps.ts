import { AppLayoutProps } from '../components/AppLayout';
import { Post } from '../types/Post';

export function getAppLayoutProps(posts: Array<Post>): AppLayoutProps {
  return {
    recentPosts: posts.slice(0, 5),
  };
}
