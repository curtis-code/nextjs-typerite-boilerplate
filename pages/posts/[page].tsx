/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import { config } from '../../config';
import { filterPostsByPage } from '../../util/filterPostsByPage';
import { getPages } from '../../util/getPages';
import Posts from '../../components/Posts';

interface IPage {
  page: number;
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<IPage> = function ({ page, pageCount, posts }: IPage) {
  return (
    <Posts page={page} pageCount={pageCount} posts={posts} />
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
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);

  return {
    props: {
      page: Number(page),
      pageCount,
      posts: filterPostsByPage(posts, config.postsPerPage, Number(page)),
    },
  };
}
