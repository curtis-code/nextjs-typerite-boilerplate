/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { config } from '../config';
import { Post } from '../types/Post';
import { Tag } from '../types/Tag';
import SocialLinks from './SocialLinks';

function NavigationLinks() {
  if (!config.navigationLinks || !config.navigationLinks.length) return null;
  return <>{config.navigationLinks.map((link) => <li key={link.name}><a href={link.href} title="">{link.name}</a></li>)}</>;
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
        <SocialLinks socialLinks={config.socialLinks} />
      </nav>

      <a href="#0" className="header__menu-toggle">
        <span>Menu</span>
      </a>

    </header>
  );
}
