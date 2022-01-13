/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { config } from '../config';

export default function Footer() {
  const currentDate: Date = new Date(Date.now());
  const copyright = `© Copyright ${config.title} ${currentDate.getUTCFullYear()}`;
  return (
    <footer className="s-footer">
      <div className="row">
        <div className="column large-full footer__content">
          <div className="footer__copyright">
            <span data-testid="copyright">{copyright}</span>
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
  );
}
