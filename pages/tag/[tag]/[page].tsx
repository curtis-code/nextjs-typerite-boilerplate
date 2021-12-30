/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../../types/Post';
import { getPosts } from '../../../util/getPosts';
import { config } from '../../../config';
import { filterPostsByPage } from '../../../util/filterPostsByPage';
import { getPages } from '../../../util/getPages';
import Posts from '../../../components/Posts';
import AppLayout, { AppLayoutProps } from '../../../components/AppLayout';
import { getAppLayoutProps } from '../../../util/getAppLayoutProps';
import { filterPostsByTag } from '../../../util/filterPostsByTag';
import { getTopTags } from '../../../util/getTopTags';

interface PageProps extends AppLayoutProps {
  tag: string;
  page: number;
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<PageProps> = function ({
  tag, page, pageCount, posts, recentPosts, topTags,
}: PageProps) {
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
  const posts: Array<Post> = filterPostsByTag(getPosts(), tag);
  const pageCount = Math.ceil(posts.length / config.postsPerPage);
  const appLayoutProps = getAppLayoutProps(posts);

  return {
    props: {
      ...appLayoutProps,
      tag,
      page: Number(page),
      pageCount,
      posts: filterPostsByPage(posts, config.postsPerPage, Number(page)),
    },
  };
}
