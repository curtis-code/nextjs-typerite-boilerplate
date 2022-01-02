/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../types/Post';
import { getPosts } from '../util/getPosts';
import { config } from '../config';
import { filterPostsByPage } from '../util/filterPostsByPage';
import Posts from '../components/Posts';
import AppLayout, { AppLayoutProps } from '../components/AppLayout';
import { getAppLayoutProps } from '../util/getAppLayoutProps';
import { getStaticPropsForPosts } from '../util/getStaticPropsForPosts';

interface HomeProps extends AppLayoutProps {
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<HomeProps> = function ({
  pageCount, posts, recentPosts, topTags,
}: HomeProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <Posts page={1} pageCount={pageCount} posts={posts} />
    </AppLayout>
  );
};

export default Home;

export async function getStaticProps() {
  return getStaticPropsForPosts({ postsPerPage: config.postsPerPage });
}
