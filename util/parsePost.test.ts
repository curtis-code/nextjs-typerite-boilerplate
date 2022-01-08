import { parsePost } from './parsePost';

describe('parsePost', () => {
  const bannerImage = '/bannerImage.png';
  const date = '2022-06-30T00:00:00';
  const description = 'Lorem ipsum';
  const title = 'title';
  const slug = 'slug';
  const tags = ['foo'];
  const content = 'foo';

  it('parses post', () => {
    const image = '/image.png';
    const data = {
      bannerImage,
      description,
      image,
      title,
      slug,
      tags,
      date,
    };
    expect(parsePost(data, content)).toEqual({
      content,
      bannerImage,
      description,
      image,
      title,
      slug,
      tags,
      date: new Date(date),
    });
  });

  it('parses post with array of images', () => {
    const image = ['/foo.png', '/bar.png'];
    const data = {
      bannerImage,
      description,
      image,
      title,
      slug,
      tags,
      date,
    };
    expect(parsePost(data, content)).toEqual({
      content,
      bannerImage,
      description,
      image: '/foo.png',
      imageList: image,
      title,
      slug,
      tags,
      date: new Date(date),
    });
  });

  it('parses post with array of banner images', () => {
    const data = {
      bannerImage: ['/foo.png', '/bar.png'],
      description,
      title,
      slug,
      tags,
      date,
    };
    expect(parsePost(data, content)).toEqual({
      content,
      bannerImage: '/foo.png',
      bannerImageList: data.bannerImage,
      description,
      title,
      slug,
      tags,
      date: new Date(date),
    });
  });

  it('parses post with video', () => {
    const video = 'https://videourl';
    const data = {
      bannerImage,
      description,
      title,
      slug,
      tags,
      date,
      video,
    };
    expect(parsePost(data, content)).toEqual({
      content,
      bannerImage,
      description,
      title,
      slug,
      tags,
      date: new Date(date),
      videoUrl: video,
    });
  });
});
