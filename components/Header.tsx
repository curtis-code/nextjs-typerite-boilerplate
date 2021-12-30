/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React from 'react';
import { Post } from '../types/Post';
import { Tag } from '../types/Tag';

interface HeaderProps {
  recentPosts: Array<Post>;
  topTags: Array<Tag>;
}

export default function Header({ recentPosts, topTags }: HeaderProps) {
  return (
    <header className="s-header">

      <div className="header__top">
        <div className="header__logo">
          <Link href="/">
            <a className="site-logo">
              <img src="/images/logo.svg" alt="Homepage" />
            </a>
          </Link>
        </div>
      </div>

      <nav className="header__nav-wrap">
        <ul className="header__nav">
          <li className="current"><Link href="/">Home</Link></li>
          <li className="has-children">
            <a href="/" title="">Categories</a>
            <ul className="sub-menu">
              {topTags.map((tag) => (
                <li key={tag.name}><a href={`/tag/${tag.name}`}>{tag.name}</a></li>
              ))}
            </ul>
          </li>
          <li className="has-children">
            <a href="/" title="">Recent Posts</a>
            <ul className="sub-menu">
              {recentPosts.map((post) => (
                <li key={post.slug}><a href={`/post/${post.slug}`}>{post.title}</a></li>
              ))}
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
  );
}
