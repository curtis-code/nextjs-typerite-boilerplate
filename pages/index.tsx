/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Search from '../components/Search';
import PostLink from '../components/PostLink';
import { Post } from '../types/Post';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = function ({ posts }: { posts: Array<Post> }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Typerite</title>
        <meta name="description" content="" />
        <meta name="author" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="css/base.css" />
        <link rel="stylesheet" href="css/vendor.css" />
        <link rel="stylesheet" href="css/main.css" />

        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
      </Head>

      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div />
          <div />
          <div />
        </div>
      </div>

      <div id="top" className="s-wrap site-wrapper">

        <header className="s-header">

          <div className="header__top">
            <div className="header__logo">
              <Link href="/">
                <a className="site-logo">
                  <img src="images/logo.svg" alt="Homepage" />
                </a>
              </Link>
            </div>
          </div>

          <nav className="header__nav-wrap">

            <ul className="header__nav">
              <li className="current"><a href="index.html" title="">Home</a></li>
              <li className="has-children">
                <a href="#0" title="">Categories</a>
                <ul className="sub-menu">
                  <li><a href="category.html">Lifestyle</a></li>
                  <li><a href="category.html">Health</a></li>
                  <li><a href="category.html">Family</a></li>
                  <li><a href="category.html">Management</a></li>
                  <li><a href="category.html">Travel</a></li>
                  <li><a href="category.html">Work</a></li>
                </ul>
              </li>
              <li className="has-children">
                <a href="#0" title="">Blog Posts</a>
                <ul className="sub-menu">
                  <li><a href="single-video.html">Video Post</a></li>
                  <li><a href="single-audio.html">Audio Post</a></li>
                  <li><a href="single-gallery.html">Gallery Post</a></li>
                  <li><a href="single-standard.html">Standard Post</a></li>
                </ul>
              </li>
              <li><a href="styles.html" title="">Styles</a></li>
              <li><a href="page-about.html" title="">About</a></li>
              <li><a href="page-contact.html" title="">Contact</a></li>
            </ul>

            <ul className="header__social">
              <li className="ss-facebook">
                <a href="https://facebook.com/">
                  <span className="screen-reader-text">Facebook</span>
                </a>
              </li>
              <li className="ss-twitter">
                <a href="#0">
                  <span className="screen-reader-text">Twitter</span>
                </a>
              </li>
              <li className="ss-dribbble">
                <a href="#0">
                  <span className="screen-reader-text">Dribbble</span>
                </a>
              </li>
              <li className="ss-pinterest">
                <a href="#0">
                  <span className="screen-reader-text">Behance</span>
                </a>
              </li>
            </ul>

          </nav>

          <a href="#0" className="header__menu-toggle">
            <span>Menu</span>
          </a>

        </header>

        <Search />

        <div className="s-content">
          <div className="masonry-wrap">
            <div className="masonry">
              <div className="grid-sizer" />
              {posts.map((post) => <PostLink key={post.title} post={post} />)}

              <PostLink post={{
                date: new Date('2021-04-10 11:36'),
                description: 'Lorem ipsum Sed eiusmod esse aliqua mollit id et sit proident dolor nulla sed',
                image: '/images/thumbs/masonry/woodcraft-600.jpg',
                tags: ['foo', 'bar'],
                title: 'Post title',
                slug: 'post-title',
              }}
              />

              <PostLink post={{
                date: new Date('2021-02-03 11:35'),
                title: 'Post title',
                slug: 'post-title',
              }}
              />

              <article className="masonry__brick entry format-quote animate-this">

                <div className="entry__thumb">
                  <blockquote>
                    <p>
                      Good design is making something intelligible and memorable.
                      Great design is making something memorable and meaningful.
                    </p>

                    <cite>Dieter Rams</cite>
                  </blockquote>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/tulips-600.jpg"
                      srcSet="images/thumbs/masonry/tulips-600.jpg 1x, images/thumbs/masonry/tulips-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">10 Interesting Facts About Caffeine.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Health</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 28, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/dew-600.jpg"
                      srcSet="images/thumbs/masonry/dew-600.jpg 1x, images/thumbs/masonry/dew-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">Health Benefits Of Morning Dew.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Lifestyle</a>
                        <a href="category.html">Health</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 28, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit
                      id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit
                      nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/rucksack-600.jpg"
                      srcSet="images/thumbs/masonry/rucksack-600.jpg 1x, images/thumbs/masonry/rucksack-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">

                    <h2 className="entry__title"><a href="single-standard.html">The Art Of Visual Storytelling.</a></h2>

                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Lifestyle</a>
                        <a href="category.html">Work</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 26, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                      incididunt mollit id et sit proident dolor nulla sed commodo
                      est ad minim elit reprehenderit nisi officia aute incididunt
                      velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/jump-600.jpg"
                      srcSet="images/thumbs/masonry/jump-600.jpg 1x, images/thumbs/masonry/jump-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">

                    <h2 className="entry__title"><a href="single-standard.html">Create Meaningful Family Moments.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Family</a>
                        <a href="category.html">Relationship</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 26, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-audio animate-this">

                <div className="entry__thumb">
                  <a href="single-audio.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/guitarist-600.jpg"
                      srcSet="images/thumbs/masonry/guitarist-600.jpg 1x, images/thumbs/masonry/guitarist-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-audio.html">What Your Music Preference Says About You and Your Personality.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Lifestyle</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 24, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                      incididunt mollit id et sit proident dolor nulla sed commodo est
                      ad minim elit reprehenderit nisi officia aute incididunt velit
                      sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/beetle-600.jpg"
                      srcSet="images/thumbs/masonry/beetle-600.jpg 1x, images/thumbs/masonry/beetle-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">Throwback To The Good Old Days.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Lifestyle</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 24, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit
                      id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-video animate-this">

                <div className="entry__thumb video-image">
                  <a href="https://player.vimeo.com/video/117310401?color=339989&title=0&byline=0&portrait=0" data-lity className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/cookies-600.jpg"
                      srcSet="images/thumbs/masonry/cookies-600.jpg 1x, images/thumbs/masonry/cookies-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-video.html">No Sugar Oatmeal Cookies.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Lifestyle</a>
                        <a href="category.html">Health</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 24, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
                      incididunt mollit id et sit proident dolor nulla sed
                      commodo est ad minim elit reprehenderit nisi officia aute
                      incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/lamp-600.jpg"
                      srcSet="images/thumbs/masonry/lamp-600.jpg 1x, images/thumbs/masonry/lamp-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">Another Standard Format Post.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Design</a>
                        <a href="category.html">Photography</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 24, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-link animate-this">

                <div className="entry__thumb">
                  <div className="link-wrap">
                    <h2>Powerful web & Wordpress hosting. Guaranteed. Starting at $2.59/mo!</h2>
                    <cite>
                      <a target="_blank" rel="noreferrer" href="https://www.dreamhost.com/r.cgi?287326">https://www.dreamhost.com</a>
                    </cite>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-gallery animate-this">

                <div className="entry__thumb slider">
                  <div className="slider__slides">
                    <div className="slider__slide">
                      <img
                        src="images/thumbs/masonry/gallery/slide-1-600.jpg"
                        srcSet="images/thumbs/masonry/gallery/slide-1-600.jpg 1x, images/thumbs/masonry/gallery/slide-1-1200.jpg 2x"
                        alt=""
                      />
                    </div>
                    <div className="slider__slide">
                      <img
                        src="images/thumbs/masonry/gallery/slide-2-600.jpg"
                        srcSet="images/thumbs/masonry/gallery/slide-2-600.jpg 1x, images/thumbs/masonry/gallery/slide-2-1200.jpg 2x"
                        alt=""
                      />
                    </div>
                    <div className="slider__slide">
                      <img
                        src="images/thumbs/masonry/gallery/slide-3-600.jpg"
                        srcSet="images/thumbs/masonry/gallery/slide-3-600.jpg 1x, images/thumbs/masonry/gallery/slide-3-1200.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-gallery.html">The Best Tropical Leaves Images.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Vacation</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 23, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/walk-600.jpg"
                      srcSet="images/thumbs/masonry/walk-600.jpg 1x, images/thumbs/masonry/walk-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">Using Repetition and Patterns in Photography.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Work</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 23, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

              <article className="masonry__brick entry format-standard animate-this">

                <div className="entry__thumb">
                  <a href="single-standard.html" className="entry__thumb-link">
                    <img
                      src="images/thumbs/masonry/real-600.jpg"
                      srcSet="images/thumbs/masonry/real-600.jpg 1x, images/thumbs/masonry/real-1200.jpg 2x"
                      alt=""
                    />
                  </a>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <h2 className="entry__title"><a href="single-standard.html">How We Live Is What Makes Us Real.</a></h2>
                    <div className="entry__meta">
                      <span className="entry__meta-cat">
                        <a href="category.html">Travel</a>
                        <a href="category.html">Vacation</a>
                      </span>
                      <span className="entry__meta-date">
                        <a href="single-standard.html">Apr 23, 2019</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt
                      mollit id et sit proident dolor nulla sed commodo est ad minim elit
                      reprehenderit nisi officia aute incididunt velit sint in aliqua...
                    </p>
                  </div>
                </div>

              </article>

            </div>

          </div>

          <div className="row">
            <div className="column large-full">
              <nav className="pgn">
                <ul>
                  <li><a className="pgn__prev" href="#0">Prev</a></li>
                  <li><a className="pgn__num" href="#0">1</a></li>
                  <li><span className="pgn__num current">2</span></li>
                  <li><a className="pgn__num" href="#0">3</a></li>
                  <li><a className="pgn__num" href="#0">4</a></li>
                  <li><a className="pgn__num" href="#0">5</a></li>
                  <li><span className="pgn__num dots">…</span></li>
                  <li><a className="pgn__num" href="#0">8</a></li>
                  <li><a className="pgn__next" href="#0">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        <footer className="s-footer">
          <div className="row">
            <div className="column large-full footer__content">
              <div className="footer__copyright">
                <span>© Copyright Typerite 2021</span>
                <span>
                  {'Design by '}
                  <a href="https://www.styleshout.com/">StyleShout</a>
                </span>
              </div>
            </div>
          </div>

          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top" />
          </div>
        </footer>

      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts: Array<Post> = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );

    const {
      data: {
        date,
        description,
        image,
        title,
        slug,
        tags,
      },
    } = matter(markdownWithMeta);

    const post: Post = {
      date: new Date(date),
      description,
      title,
      slug,
      tags,
    };

    if (image) post.image = image;

    return post;
  });

  return {
    props: {
      posts,
    },
  };
}
