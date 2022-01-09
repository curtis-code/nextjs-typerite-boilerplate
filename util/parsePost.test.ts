import { parsePost } from './parsePost';

describe('parsePost', () => {
  const date = '2022-06-30T00:00:00';
  const content = 'foo';

  const baseFrontMatter = {
    bannerImage: '/bannerImage.png',
    description: 'Lorem ipsum',
    title: 'title',
    slug: 'slug',
    tags: ['foo'],
  };

  it('parses post', () => {
    const image = '/image.png';
    const data = {
      ...baseFrontMatter,
      image,
      date,
    };
    expect(parsePost(data, content)).toEqual({
      ...baseFrontMatter,
      content,
      image,
      date: new Date(date),
    });
  });

  it('parses post with array of images', () => {
    const image = ['/foo.png', '/bar.png'];
    const data = {
      ...baseFrontMatter,
      image,
      date,
    };
    expect(parsePost(data, content)).toEqual({
      ...baseFrontMatter,
      content,
      image: '/foo.png',
      imageList: image,
      date: new Date(date),
    });
  });

  it('parses post with array of banner images', () => {
    const data = {
      ...baseFrontMatter,
      bannerImage: ['/foo.png', '/bar.png'],
      date,
    };
    expect(parsePost(data, content)).toEqual({
      ...baseFrontMatter,
      content,
      bannerImage: '/foo.png',
      bannerImageList: data.bannerImage,
      date: new Date(date),
    });
  });

  it('parses post with video', () => {
    const video = 'https://videourl';
    const data = {
      ...baseFrontMatter,
      date,
      video,
    };
    expect(parsePost(data, content)).toEqual({
      ...baseFrontMatter,
      content,
      date: new Date(date),
      videoUrl: video,
    });
  });

  it('parses post with audio', () => {
    const audio = 'https://audiourl';
    const data = {
      ...baseFrontMatter,
      date,
      audio,
    };
    expect(parsePost(data, content)).toEqual({
      ...baseFrontMatter,
      content,
      date: new Date(date),
      audioUrl: audio,
    });
  });
});
