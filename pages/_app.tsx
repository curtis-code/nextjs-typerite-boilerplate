/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script type="text/javascript" src="/js/modernizr.js" />
      <Script type="text/javascript" src="/js/jquery.js" />
      <Script type="text/javascript" src="/js/plugins.js" />
      <Script type="text/javascript" src="/js/main.js" />
    </>
  );
}

export default MyApp;
