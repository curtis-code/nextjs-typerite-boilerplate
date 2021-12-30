import React from 'react';
import { Post } from '../types/Post';
import Pagination from './Pagination';
import PostLink from './PostLink';

interface IPosts {
  posts: Array<Post>;
  page: number;
  pageCount: number;
  tag?: string;
}

function TagHeader({ tag }: { tag: string }) {
  return (
    <header className="listing-header">
      <h1 className="h2">
        Category:
        {' '}
        {tag}
      </h1>
    </header>
  );
}
export default function Posts({
  posts, page, pageCount, tag,
}: IPosts) {
  return (
    <div className="s-content">
      {tag && <TagHeader tag={tag} />}
      <div className="masonry-wrap">
        <div className="masonry">
          <div className="grid-sizer" />
          {posts.map((post) => <PostLink key={post.title} post={post} />)}
        </div>

      </div>

      <div className="row">
        <div className="column large-full">
          <Pagination currentPage={page} pageCount={pageCount} tag={tag} />
        </div>
      </div>

    </div>
  );
}

Posts.defaultProps = {
  tag: null,
};
