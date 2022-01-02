/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import { config } from '../../config';
import { getPages } from '../../util/getPages';
import Posts from '../../components/Posts';
import AppLayout from '../../components/AppLayout';
import { getStaticPropsForPosts } from '../../util/getStaticPropsForPosts';
import { StaticPropsForPostsProps } from '../../types/StaticPropsForPosts';

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<StaticPropsForPostsProps> = function ({
  page, pageCount, posts, recentPosts, topTags,
}: StaticPropsForPostsProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <Posts page={page} pageCount={pageCount} posts={posts} />
    </AppLayout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);

  const pages = getPages({ pageCount, excludeFirstPage: true });
  const paths = pages.map((page) => ({
    params: {
      page: page.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    page: string;
  }
}

export async function getStaticProps({ params: { page } }: IGetStaticProps) {
  return getStaticPropsForPosts({
    page: Number(page),
    postsPerPage: config.postsPerPage,
  });
}
