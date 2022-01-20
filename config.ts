import { Config } from './types/Config';
import { SocialType } from './types/SocialType';

export const config: Config = {
  title: 'Typerite',
  url: 'https://nextjs-typerite-boilerplate.netlify.app',
  postsPerPage: 14,
  socialLinks: [
    {
      type: SocialType.facebook,
      url: 'https://facebook.com',
    },
    {
      type: SocialType.twitter,
      url: 'https://twitter.com',
    },
    {
      type: SocialType.dribbble,
      url: 'https://dribbble.com',
    },
    {
      type: SocialType.pinterest,
      url: 'https://pinterest.com',
    },
  ],
  navigationLinks: [{
    name: 'About',
    href: '/about',
  }],
};
