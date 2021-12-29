import React from 'react';
import { Post } from '../types/Post';
import Pagination from './Pagination';
import PostLink from './PostLink';

interface IPosts {
  posts: Array<Post>;
  page: number;
  pageCount: number;
}

export default function Posts({ posts, page, pageCount }: IPosts) {
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
          <Pagination firstPagePath="/" currentPage={page} pageCount={pageCount} />
        </div>
      </div>

    </div>
  );
}
