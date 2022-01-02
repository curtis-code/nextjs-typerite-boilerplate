import { Post } from '../types/Post';
import { StaticPropsForPosts } from '../types/StaticPropsForPosts';
import { filterPostsByPage } from './filterPostsByPage';
import { filterPostsByTag } from './filterPostsByTag';
import { getAppLayoutProps } from './getAppLayoutProps';
import { getPosts } from './getPosts';

interface IGetStaticPropsForPosts {
  tag?: string;
  page?: number;
  postsPerPage: number;
}

export function getStaticPropsForPosts(
  { tag, page = 1, postsPerPage }: IGetStaticPropsForPosts,
): StaticPropsForPosts {
  const posts: Array<Post> = getPosts();
  const filteredPosts = tag ? filterPostsByTag(posts, tag) : posts;
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      tag,
      page,
      pageCount,
      posts: filterPostsByPage(filteredPosts, postsPerPage, page),
    },
  };
}
