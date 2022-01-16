import { Config, SocialType } from './types/Config';

export const config: Config = {
  title: 'Typerite',
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
