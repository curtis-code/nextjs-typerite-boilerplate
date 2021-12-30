/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import { config } from '../../config';
import { filterPostsByPage } from '../../util/filterPostsByPage';
import Posts from '../../components/Posts';
import AppLayout, { AppLayoutProps } from '../../components/AppLayout';
import { getAppLayoutProps } from '../../util/getAppLayoutProps';
import { getTopTags } from '../../util/getTopTags';

interface PageProps extends AppLayoutProps {
  tag: string;
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<PageProps> = function ({
  tag, pageCount, posts, recentPosts, topTags,
}: PageProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <Posts page={1} pageCount={pageCount} posts={posts} tag={tag} />
    </AppLayout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();
  // const pageCount = Math.ceil(posts.length / config.postsPerPage);

  const tags = getTopTags(posts);
  const paths = tags.map((tag) => ({
    params: {
      tag: tag.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    tag: string;
  }
}

export async function getStaticProps({ params: { tag } }: IGetStaticProps) {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      tag,
      pageCount,
      posts: filterPostsByPage(posts, config.postsPerPage, 1),
    },
  };
}
