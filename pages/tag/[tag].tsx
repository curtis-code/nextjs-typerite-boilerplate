/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import { config } from '../../config';
import Posts from '../../components/Posts';
import AppLayout from '../../components/AppLayout';
import { getTopTags } from '../../util/getTopTags';
import { getStaticPropsForPosts } from '../../util/getStaticPropsForPosts';
import { StaticPropsForPostsProps } from '../../types/StaticPropsForPosts';

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<StaticPropsForPostsProps> = function ({
  tag, pageCount, page, posts, recentPosts, topTags,
}: StaticPropsForPostsProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags}>
      <Posts page={page} pageCount={pageCount} posts={posts} tag={tag} />
    </AppLayout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();

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
  return getStaticPropsForPosts({
    postsPerPage: config.postsPerPage,
    tag,
  });
}
