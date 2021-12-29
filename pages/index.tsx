/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../types/Post';
import { getPosts } from '../util/getPosts';
import { config } from '../config';
import { filterPostsByPage } from '../util/filterPostsByPage';
import Posts from '../components/Posts';

interface IHome {
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<IHome> = function ({ pageCount, posts }: IHome) {
  return (
    <Posts page={1} pageCount={pageCount} posts={posts} />
  );
};

export default Home;

export async function getStaticProps() {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);

  return {
    props: {
      pageCount,
      posts: filterPostsByPage(posts, config.postsPerPage, 1),
    },
  };
}
