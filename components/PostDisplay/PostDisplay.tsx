import React from 'react';
import showdown from 'showdown';
import { Post } from '../../types/Post';
import { getFormatClass } from '../../util/getFormatClass';
import PostDisplayBannerImage from './PostDisplayBannerImage';
import PostDisplayVideo from './PostDisplayVideo';

function PostAudio({ audioUrl }: { audioUrl: string }) {
  return (
    <div className="media-wrap entry__media">
      <iframe title="audio embed" width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={audioUrl} />
    </div>
  );
}

function HeaderPostTags({ tags }: { tags: Array<string> }) {
  return (
    <li className="cat-links">
      {tags.slice(0, 2).map((tag) => <a key={tag} href={`/tag/${tag}`}>{tag}</a>)}
    </li>
  );
}

function FooterPostTags({ tags }: { tags: Array<string> }) {
  return (
    <p className="entry__tags">
      <span>Post Tags</span>
      <span className="entry__tag-list">
        {tags.map((tag) => <a key={tag} href={`/tag/${tag}`}>{tag}</a>)}
      </span>
    </p>
  );
}

function AdjacentPosts({ previousPost, nextPost }: { previousPost?: Post, nextPost?: Post }) {
  if (!previousPost && !nextPost) return null;
  return (
    <div className="entry__pagenav">
      <div className="entry__nav">
        {previousPost
          && (
            <div className="entry__prev">
              <a href={`/post/${previousPost.slug}`} rel="prev">
                <span>Previous Post</span>
                {previousPost.title}
              </a>
            </div>
          )}
        {nextPost
          && (
            <div className="entry__next">
              <a href={`/post/${nextPost.slug}`} rel="next">
                <span>Next Post</span>
                {nextPost.title}
              </a>
            </div>
          )}
      </div>
    </div>
  );
}

AdjacentPosts.defaultProps = {
  previousPost: null,
  nextPost: null,
};

function PostContent({ content }: { content: string }) {
  const convert = new showdown.Converter();
  const htmlContent = convert.makeHtml(content);
  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

function RelatedPosts({ relatedPosts }: { relatedPosts: (Array<Post> | undefined) }) {
  if (!relatedPosts || !relatedPosts.length) return null;
  return (
    <div className="entry__related">
      <h3 className="h2">Related Articles</h3>
      <ul className="related">
        {relatedPosts.map((relatedPost) => (
          <li className="related__item" key={relatedPost.slug}>
            <a href={`/post/${relatedPost.slug}`} className="related__link">
              <img src={relatedPost.image} alt={relatedPost.title} />
            </a>
            <h5 className="related__post-title">{relatedPost.title}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PostDisplayProps {
  post: Post;
  previousPost?: Post;
  nextPost?: Post;
  relatedPosts?: Array<Post>;
}

export default function PostDisplay({
  post, previousPost, nextPost, relatedPosts,
}: PostDisplayProps) {
  const formattedDate = post.date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="s-content content">
      <main className="row content__page">
        <article className={`column large-full entry ${getFormatClass(post)}`}>
          {post.audioUrl && <PostAudio audioUrl={post.audioUrl} />}
          {post.videoUrl && <PostDisplayVideo videoUrl={post.videoUrl} />}
          <PostDisplayBannerImage post={post} />
          <div className="content__page-header entry__header">
            <h1 className="display-1 entry__title">
              {post.title}
            </h1>
            <ul className="entry__header-meta">
              {/* <li className="author">
                By
                {' '}
                <a href="#0">Jonathan Doe</a>
              </li> */}
              <li className="date">{formattedDate}</li>
              {post.tags && <HeaderPostTags tags={post.tags} />}
            </ul>
          </div>
          <div className="entry__content">
            <PostContent content={post.content} />
            {post.tags && <FooterPostTags tags={post.tags} />}
          </div>
          <AdjacentPosts previousPost={previousPost} nextPost={nextPost} />
          <RelatedPosts relatedPosts={relatedPosts} />
        </article>
      </main>
    </div>
  );
}

PostDisplay.defaultProps = {
  previousPost: null,
  nextPost: null,
  relatedPosts: [],
};
