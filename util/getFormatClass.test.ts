import { Post } from '../types/Post';
import { generateTestPost } from '../__tests__/generateTestPost.test';
import { getFormatClass } from './getFormatClass';

describe('getFormatClass', () => {
  const standardPost: Post = generateTestPost();

  it('returns standard format', () => {
    expect(getFormatClass(standardPost)).toEqual('format-standard');
  });

  it('returns gallery format', () => {
    const post: Post = {
      ...standardPost,
      imageList: ['/foo.png', '/bar.png'],
    };
    expect(getFormatClass(post)).toEqual('format-gallery');
  });

  it('returns video format', () => {
    const post: Post = {
      ...standardPost,
      videoUrl: 'https://videourl',
    };
    expect(getFormatClass(post)).toEqual('format-video');
  });

  it('returns audio format', () => {
    const post: Post = {
      ...standardPost,
      audioUrl: 'https://audiourl',
    };
    expect(getFormatClass(post)).toEqual('format-audio');
  });
});
