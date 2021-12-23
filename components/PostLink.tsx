import React from 'react';

export default function PostLink() {
  return (
    <article className="masonry__brick entry format-standard animate-this">

      <div className="entry__thumb">
        <a href="single-standard.html" className="entry__thumb-link">
          <img
            src="images/thumbs/masonry/woodcraft-600.jpg"
            srcSet="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x"
            alt=""
          />
        </a>
      </div>

      <div className="entry__text">
        <div className="entry__header">

          <h2 className="entry__title"><a href="single-standard.html">Just a Standard Format Post.</a></h2>
          <div className="entry__meta">
            <span className="entry__meta-cat">
              <a href="category.html">Design</a>
              <a href="category.html">Photography</a>
            </span>
            <span className="entry__meta-date">
              <a href="single-standard.html">Apr 29, 2019</a>
            </span>
          </div>

        </div>
        <div className="entry__excerpt">
          <p>
            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua
            incididunt mollit id et sit proident dolor nulla sed commodo est
            ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...
          </p>
        </div>
      </div>

    </article>
  );
}
