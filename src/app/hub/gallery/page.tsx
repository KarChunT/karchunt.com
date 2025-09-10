import { glob } from 'glob';
import GalleryClient from '@/components/GalleryClient';

export const metadata = {
  title: 'Gallery',
};

const Gallery = () => {
  const images = glob.sync('public/gallery/**/*.webp');
  const items: GalleryProps[] = images.map((image) => ({
    src: image.replace('public', ''),
    category: image.replace('public\\gallery\\', '').split('\\')[0],
  }));
  return <GalleryClient items={items} />;
};

export default Gallery;
