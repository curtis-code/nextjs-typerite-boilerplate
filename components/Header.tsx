/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { config } from '../config';
import { Post } from '../types/Post';
import { Tag } from '../types/Tag';

function NavigationLinks() {
  if (!config.navigationLinks || !config.navigationLinks.length) return null;
  return <>{config.navigationLinks.map((link) => <li><a href={link.href} title="">{link.name}</a></li>)}</>;
}

function SocialLinks() {
  if (!config.socialLinks || !config.socialLinks.length) return null;

  return (
    <ul className="header__social">
      {config.socialLinks.map((socialLink) => (
        <li className={`ss-${socialLink.className}`} key={socialLink.name}>
          <a href={socialLink.url}>
            <span className="screen-reader-text">{socialLink.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

interface HeaderProps {
  recentPosts: Array<Post>;
  topTags: Array<Tag>;
}

export default function Header({ recentPosts, topTags }: HeaderProps) {
  return (
    <header className="s-header">

      <div className="header__top">
        <div className="header__logo">
          <a href="/" className="site-logo">
            <img src="/images/logo.svg" alt="Homepage" />
          </a>
        </div>
      </div>

      <nav className="header__nav-wrap">
        <ul className="header__nav">
          <li className="current"><a href="/">Home</a></li>
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
          <NavigationLinks />
        </ul>
        <SocialLinks />
      </nav>

      <a href="#0" className="header__menu-toggle">
        <span>Menu</span>
      </a>

    </header>
  );
}
