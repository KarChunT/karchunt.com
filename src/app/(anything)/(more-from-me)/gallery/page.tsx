// import path from 'path';
// import { glob } from 'glob';
import GalleryClient from '@/components/GalleryClient';

export const metadata = {
  title: 'Gallery',
};

const items = [
  {
    src: '/gallery/penguin/penguin-penguin9.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin8.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin7.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin6.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin5.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin4.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin3.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin2.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin14.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin13.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin12.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin11.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin10.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin1.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin-learn.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin-document.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-penguin-challenge.webp',
    category: 'penguin',
  },
  {
    src: '/gallery/penguin/penguin-leetcode.webp',
    category: 'penguin',
  },
];

const Gallery = () => {
  // const images = glob.sync('public/gallery/**/*.webp');
  // const items: GalleryProps[] = images.map((image) => {
  //   const relative = image.replace('public' + path.sep, '');
  //   // Replace all backslashes with forward slashes and ensure leading slash
  //   const src = '/' + relative.replace(/\\/g, '/').replace(/^\/+/, '');
  //   const parts = relative.split(path.sep);
  //   return {
  //     src,
  //     category: parts[1],
  //   };
  // });
  return <GalleryClient items={items} />;
};

export default Gallery;
