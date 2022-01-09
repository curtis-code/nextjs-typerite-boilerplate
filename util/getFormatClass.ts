import { Post } from '../types/Post';

export function getFormatClass(post: Post): ('format-gallery' | 'format-video' | 'format-audio' | 'format-standard') {
  if (post.imageList) return 'format-gallery';
  if (post.image && post.videoUrl) return 'format-video';
  if (post.audioUrl) return 'format-audio';
  return 'format-standard';
}
