/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import { config } from '../config';
import Posts from '../components/Posts';
import AppLayout from '../components/AppLayout';
import { getStaticPropsForPosts } from '../util/getStaticPropsForPosts';
import { StaticPropsForPostsProps } from '../types/StaticPropsForPosts';
import { generateRssFeedContent } from '../util/generateRssFeedContent';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<StaticPropsForPostsProps> = function ({
  pageCount, posts, recentPosts, topTags, page,
}: StaticPropsForPostsProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <Posts page={page} pageCount={pageCount} posts={posts} />
    </AppLayout>
  );
};

export default Home;

export async function getStaticProps() {
  const rss = generateRssFeedContent();
  fs.writeFileSync('./public/rss.xml', rss);
  return getStaticPropsForPosts({ postsPerPage: config.postsPerPage });
}
