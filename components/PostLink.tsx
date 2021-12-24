import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../types/Post';

interface IPostThumbnail {
  post: Post
}

interface IPostTags {
  tags: Array<string>
}

interface IPostLink {
  post: Post
}

function PostThumbnail({ post }: IPostThumbnail) {
  return (
    <div className="entry__thumb" data-testid="postthumbnail">
      <a href="single-standard.html" className="entry__thumb-link">
        <img
          src={post.image}
          // srcSet="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x"
          alt={post.title}
        />
      </a>
    </div>
  );
}

function PostTags({ tags }: IPostTags) {
  return (
    <span className="entry__meta-cat" data-testid="tags">
      {tags.slice(0, 2).map((tag) => <a href={`/tag/${tag}`}>{tag}</a>)}
    </span>
  );
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default function PostLink({ post }: IPostLink) {
  const {
    date, image, tags, title, slug,
  } = post;
  const postUrl = `/post/${slug}`;
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="masonry__brick entry format-standard animate-this">

      {image && <PostThumbnail post={post} />}

      <div className="entry__text">
        <div className="entry__header">

          <h2 className="entry__title"><a href={postUrl}>{title}</a></h2>
          <div className="entry__meta">
            {tags && <PostTags tags={tags} />}
            <span className="entry__meta-date">
              <a href={postUrl}>{formattedDate}</a>
            </span>
          </div>

        </div>
        <div className="entry__excerpt">
          <p>
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
            incididunt mollit id et sit proident dolor nulla sed commodo est
            ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
          </p>
        </div>
      </div>

    </article>
  );
}
