export enum SocialType {
  facebook = 'Facebook',
  twitter = 'Twitter',
  dribbble = 'Dribbble',
  behance = 'Behance',
  instagram = 'Instagram',
  pinterest = 'PInterest',
  rss = 'RSS',
  steam = 'Steam',
}

interface SocialLink {
  type: SocialType,
  url: string,
}

interface NavigationLink {
  name: string;
  href: string;
}

export interface Config {
  postsPerPage: number;
  socialLinks?: Array<SocialLink>;
  navigationLinks?: Array<NavigationLink>;
  title: string;
}
