/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import { Post } from '../../types/Post';
import { getPosts } from '../../util/getPosts';
import AppLayout, { AppLayoutProps } from '../../components/AppLayout';
import { getAppLayoutProps } from '../../util/getAppLayoutProps';
import PostDisplay from '../../components/PostDisplay/PostDisplay';
import { getAdjacentPosts } from '../../util/getAdjacentPosts';
import { getRelatedPosts } from '../../util/getRelatedPosts';

interface PageProps extends AppLayoutProps {
  post: Post,
  previousPost: Post,
  nextPost: Post,
  relatedPosts: Array<Post>,
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<PageProps> = function ({
  post, recentPosts, topTags, previousPost, nextPost, relatedPosts,
}: PageProps) {
  return (
    <AppLayout recentPosts={recentPosts} topTags={topTags} pageTitlePrefix={post.title}>
      <PostDisplay
        post={post}
        previousPost={previousPost}
        nextPost={nextPost}
        relatedPosts={relatedPosts}
      />
    </AppLayout>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IGetStaticProps {
  params: {
    slug: string,
  }
}

export const getStaticProps = ({ params: { slug } }: IGetStaticProps) => {
  const posts: Array<Post> = getPosts();
  const post = posts.find((p) => p.slug === slug)!;
  const appLayoutProps = getAppLayoutProps(posts);
  const { previousPost, nextPost } = getAdjacentPosts(posts, post);
  const relatedPosts = getRelatedPosts(posts, post);

  return {
    props: {
      ...appLayoutProps,
      post,
      previousPost,
      nextPost,
      relatedPosts,
    },
  };
};
