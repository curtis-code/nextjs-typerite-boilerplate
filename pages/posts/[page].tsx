/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import PostLink from '../../components/PostLink';
import { Post } from '../../types/Post';
import Pagination from '../../components/Pagination';
import { getPosts } from '../../util/getPosts';
import { config } from '../../config';
import { filterPostsByPage } from '../../util/filterPostsByPage';

interface IPage {
  page: number;
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Page: NextPage<IPage> = function ({ page, pageCount, posts }: IPage) {
  return (
    <div className="s-content">
      <div className="masonry-wrap">
        <div className="masonry">
          <div className="grid-sizer" />
          {posts.map((post) => <PostLink key={post.title} post={post} />)}
        </div>

      </div>

      <div className="row">
        <div className="column large-full">
          <Pagination currentPage={page} pageCount={pageCount} />
        </div>
      </div>

    </div>
  );
};

export default Page;

export const getStaticPaths = async () => {
  const posts: Array<Post> = getPosts();
  const pageCount = Math.ceil(posts.length / config.postsPerPage);

  const paths: Array<any> = [];
  for (let i = 1; i <= pageCount; i += 1) {
    const page = i;

    paths.push({
      params: {
        page: page.toString(),
      },
    });
  }

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
