import React from 'react';

export default function SocialLinks({ socialLinks }: { socialLinks: Array<any> | undefined }) {
  if (!socialLinks || !socialLinks.length) return null;

  return (
    <ul className="header__social" data-testid="sociallinks">
      {socialLinks.map((socialLink) => (
        <li className={`ss-${socialLink.type.toString().toLowerCase().replace(' ', '')}`} key={socialLink.type}>
          <a href={socialLink.url}>
            <span className="screen-reader-text">{socialLink.type.toString()}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
