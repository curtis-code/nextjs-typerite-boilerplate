import { AppLayoutProps } from '../components/AppLayout';
import { Post } from './Post';

export interface StaticPropsForPostsProps extends AppLayoutProps {
  page: number;
  pageCount: number;
  posts: Array<Post>;
}

export interface StaticPropsForPosts {
  props: StaticPropsForPostsProps;
}
