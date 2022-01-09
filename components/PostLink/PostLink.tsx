import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../../types/Post';
import PostLinkImage from './PostLinkImage';
import { getFormatClass } from '../../util/getFormatClass';

function PostTags({ tags }: { tags: Array<string> }) {
  return (
    <span className="entry__meta-cat" data-testid="tags">
      {tags.slice(0, 2).map((tag) => <a key={tag} href={`/tag/${tag}`}>{tag}</a>)}
    </span>
  );
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

function PostDescription({ description }: { description: string }) {
  return (
    <div className="entry__excerpt" data-testid="description">
      <p>
        {description}
      </p>
    </div>
  );
}

export default function PostLink({ post }: { post: Post }) {
  const {
    date, description, tags, title, slug,
  } = post;
  const postUrl = `/post/${slug}`;
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className={`masonry__brick entry ${getFormatClass(post)} animate-this`}>
      <PostLinkImage post={post} />
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
        {description && <PostDescription description={description} />}
      </div>
    </article>
  );
}
