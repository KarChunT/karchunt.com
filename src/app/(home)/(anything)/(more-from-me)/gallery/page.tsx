import path from 'path';
import { glob } from 'glob';
import GalleryClient from '@/components/GalleryClient';

export const metadata = {
  title: 'Gallery',
};

const Gallery = () => {
  const images = glob.sync('public/gallery/**/*.webp');
  const items = images.map((image) => {
    const relative = image.replace('public' + path.sep, '');
    // Replace all backslashes with forward slashes and ensure leading slash
    const src = '/' + relative.replace(/\\/g, '/').replace(/^\/+/, '');
    const parts = relative.split(path.sep);
    return {
      src,
      category: parts[1],
    };
  });
  return <GalleryClient items={items} />;
};

export default Gallery;
