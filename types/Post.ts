export interface Post {
  date: Date;
  description?: string;
  image?: string;
  tags?: Array<string>;
  title: string;
  slug: string;
}
