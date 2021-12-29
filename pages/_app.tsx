/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Head from 'next/head';
import Header from '../components/Header';
import Search from '../components/Search';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Typerite</title>
        <meta name="description" content="" />
        <meta name="author" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css" />

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

        <Header />
        <Search />
        <Component {...pageProps} />

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

      <Script type="text/javascript" src="/js/bundle.js" />
    </>
  );
}

export default MyApp;
