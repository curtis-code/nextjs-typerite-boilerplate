import React from 'react';
import { Post } from '../../types/Post';

function PostImageCarousel({ post }: { post: Post }) {
  return (
    <div className="entry__thumb slider" data-testid="postimagecarousel">
      <div className="slider__slides">
        {post.imageList?.map((image) => (
          <div key={image} className="slider__slide">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PostVideo({ post }: { post: Post }) {
  return (
    <div className="entry__thumb video-image" data-testid="postvideo">
      <a href={post.videoUrl} data-lity className="entry__thumb-link">
        <img src={post.image} alt="" />
      </a>
    </div>
  );
}

export default function PostLinkImage({ post }: { post: Post }) {
  if (!post.image && !post.imageList) return null;
  if (post.imageList && post.imageList.length > 1) {
    return <PostImageCarousel post={post} />;
  }
  if (post.videoUrl) return <PostVideo post={post} />;
  return (
    <div className="entry__thumb" data-testid="postthumbnail">
      <a href={`/post/${post.slug}`} className="entry__thumb-link" data-testid="postthumbnail-link">
        <img
          src={post.image}
          // srcSet="images/thumbs/masonry/woodcraft-600.jpg 1x,
          // images/thumbs/masonry/woodcraft-1200.jpg 2x"
          alt={post.title}
        />
      </a>
    </div>
  );
}
