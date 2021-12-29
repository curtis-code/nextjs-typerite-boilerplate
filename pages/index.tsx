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

interface HomeProps extends AppLayoutProps {
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<HomeProps> = function ({ pageCount, posts, recentPosts }: HomeProps) {
  return (
    <AppLayout recentPosts={recentPosts}>
      <Posts page={1} pageCount={pageCount} posts={posts} />
    </AppLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      pageCount,
      posts: filterPostsByPage(posts, config.postsPerPage, 1),
    },
  };
}
