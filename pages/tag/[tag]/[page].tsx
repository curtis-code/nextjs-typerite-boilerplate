/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../../types/Post';
import { getPosts } from '../../../util/getPosts';
import { config } from '../../../config';
import { getPages } from '../../../util/getPages';
import Posts from '../../../components/Posts';
import AppLayout from '../../../components/AppLayout';
import { filterPostsByTag } from '../../../util/filterPostsByTag';
import { getTopTags } from '../../../util/getTopTags';
import { getStaticPropsForPosts } from '../../../util/getStaticPropsForPosts';
import { StaticPropsForPostsProps } from '../../../types/StaticPropsForPosts';

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<StaticPropsForPostsProps> = function ({
  tag, page, pageCount, posts, recentPosts, topTags,
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

  const paths: Array<any> = [];

  tags.forEach((tag) => {
    const tagPosts = filterPostsByTag(posts, tag.name);
    const pageCount = Math.ceil(tagPosts.length / config.postsPerPage);
    const pages = getPages({ pageCount, excludeFirstPage: true });

    pages.forEach((page) => {
      paths.push({
        params: {
          tag: tag.name,
          page: page.toString(),
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    tag: string;
    page: string;
  }
}

export async function getStaticProps({ params: { tag, page } }: IGetStaticProps) {
  return getStaticPropsForPosts({
    postsPerPage: config.postsPerPage,
    page: Number(page),
    tag,
  });
}
