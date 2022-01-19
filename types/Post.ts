export interface Post {
  audioUrl?: string;
  bannerImage?: string;
  bannerImageList?: Array<string>;
  content: string;
  date: Date;
  description?: string;
  disqusid?: string;
  image?: string;
  imageList?: Array<string>;
  tags?: Array<string>;
  title: string;
  slug: string;
  videoUrl?: string;
}
