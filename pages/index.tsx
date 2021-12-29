/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import PostLink from '../components/PostLink';
import { Post } from '../types/Post';
import Pagination from '../components/Pagination';
import { getPosts } from '../util/getPosts';
import { config } from '../config';
import { filterPostsByPage } from '../util/filterPostsByPage';

interface IHome {
  pageCount: number;
  posts: Array<Post>;
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<IHome> = function ({ pageCount, posts }: IHome) {
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
          <Pagination currentPage={1} pageCount={pageCount} />
        </div>
      </div>

    </div>
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
