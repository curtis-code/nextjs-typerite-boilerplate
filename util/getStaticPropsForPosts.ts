import { Post } from '../types/Post';
import { StaticPropsForPosts } from '../types/StaticPropsForPosts';
import { filterPostsByPage } from './filterPostsByPage';
import { getAppLayoutProps } from './getAppLayoutProps';
import { getPosts } from './getPosts';

interface IGetStaticPropsForPosts {
  page?: number;
  postsPerPage: number;
}

export function getStaticPropsForPosts(
  { page = 1, postsPerPage }: IGetStaticPropsForPosts,
): StaticPropsForPosts {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / postsPerPage);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      page,
      pageCount,
      posts: filterPostsByPage(posts, postsPerPage, page),
    },
  };
}
