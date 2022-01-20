import { SocialType } from './SocialType';

interface SocialLink {
  type: SocialType,
  url: string,
}

interface NavigationLink {
  name: string;
  href: string;
}

export interface Config {
  disqus?: string;
  googleAnalytics?: string;
  postsPerPage: number;
  socialLinks?: Array<SocialLink>;
  navigationLinks?: Array<NavigationLink>;
  title: string;
  url: string;
}
