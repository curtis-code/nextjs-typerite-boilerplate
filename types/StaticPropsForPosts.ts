import { AppLayoutProps } from '../components/AppLayout';
import { Post } from './Post';

interface StaticPropsForPostsProps extends AppLayoutProps {
  pageCount: number;
  posts: Array<Post>;
}

export interface StaticPropsForPosts {
  props: StaticPropsForPostsProps;
}
