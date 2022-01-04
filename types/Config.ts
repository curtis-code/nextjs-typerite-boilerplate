interface SocialLink {
  className: 'facebook' | 'twitter' | 'dribbble' | 'behance' | 'instagram' | 'pinterest' | 'rss',
  name: 'Facebook' | 'Twitter' | 'Dribbble' | 'Behance' | 'Instagram' | 'Pinterest' | 'RSS',
  url: string,
}

export interface Config {
  postsPerPage: number;
  socialLinks?: Array<SocialLink>
}
