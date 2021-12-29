/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Post } from '../types/Post';
import Header from './Header';
import Search from './Search';

export interface AppLayoutProps {
  recentPosts: Array<Post>;
}

interface IAppLayout extends AppLayoutProps {
  children: any;
}

export default function AppLayout({ recentPosts, children }: IAppLayout) {
  return (
    <>
      <Header recentPosts={recentPosts} />
      <Search />
      {children}

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
    </>
  );
}
