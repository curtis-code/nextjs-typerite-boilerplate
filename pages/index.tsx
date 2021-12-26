/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import type { NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostLink from '../components/PostLink';
import { Post } from '../types/Post';

interface IHome {
  posts: Array<Post>
}

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<IHome> = function ({ posts }: IHome) {
  return (
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
