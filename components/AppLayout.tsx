/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { Post } from '../types/Post';
import { Tag } from '../types/Tag';
import { generatePageTitle } from '../util/generatePageTitle';
import Footer from './Footer';
import Header from './Header';
import Search from './Search';

export interface AppLayoutProps {
  recentPosts: Array<Post>;
  topTags: Array<Tag>;
  pageTitlePrefix?: string;
}

interface IAppLayout extends AppLayoutProps {
  children: any;
}

export default function AppLayout({
  recentPosts, topTags, pageTitlePrefix, children,
}: IAppLayout) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{generatePageTitle({ prefix: pageTitlePrefix })}</title>
        <meta name="description" content="" />
        <meta name="author" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />

        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div id="preloader">
        <div id="loader" className="dots-fade">
          <div />
          <div />
          <div />
        </div>
      </div>

      <Header recentPosts={recentPosts} topTags={topTags} />
      <Search />
      <div id="top" className="s-wrap site-wrapper">
        {children}
      </div>
      <Footer />
      <Script type="text/javascript" src="/js/bundle.js" />
    </>
  );
}
