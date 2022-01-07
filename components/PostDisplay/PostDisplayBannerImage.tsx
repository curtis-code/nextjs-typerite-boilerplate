import React from 'react';
import { Post } from '../types/Post';

function ImageCarousel({ bannerImageList }: { bannerImageList: Array<string> }) {
  return (
    <div className="media-wrap entry__media" data-testid="bannerimagecarousel">
      <div className="entry__slider slider">
        <div className="slider__slides">
          {bannerImageList.map((bannerImage) => (
            <div className="slider__slide" key={bannerImage}>
              <img
                src={bannerImage}
                sizes="(max-width: 2000px) 100vw, 2000px"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleImage({ bannerImage }: { bannerImage: string }) {
  return (
    <div className="media-wrap entry__media" data-testid="bannerimage">
      <div className="entry__post-thumb">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
}

export default function PostDisplayBannerImage({ post }: { post: Post }) {
  const { bannerImage, bannerImageList } = post;
  if (!post.bannerImage && !post.bannerImageList) return null;
  if (post.bannerImageList) return <ImageCarousel bannerImageList={bannerImageList!} />;
  return <SingleImage bannerImage={bannerImage!} />;
}
