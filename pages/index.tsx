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
const Home: NextPage<{ posts: Array<Post> }> = function ({ posts }: { posts: Array<Post> }) {
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
      posts: posts.sort((a, b) => b.date.getTime() - a.date.getTime()),
    },
  };
}
