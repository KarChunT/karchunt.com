'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { getBasePath } from '@/lib/utils';

interface GalleryProps {
  src: string;
  category: string;
}

const GalleryClient = ({ items }: { items: GalleryProps[] }) => {
  const basePath = getBasePath();
  const count = 20;
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(count); // Number of items to display initially

  const uniqueCategories = ['All'];
  const tagSet = new Set(uniqueCategories);

  for (const item of items) {
    const tag = item.category;
    const normalizedTag = tag.replaceAll(' ', '-').toLowerCase();
    if (!tagSet.has(normalizedTag)) {
      tagSet.add(normalizedTag);
      uniqueCategories.push(tag);
    }
  }

  const filteredItems = items.filter(
    (item) => filter === 'All' || item.category === filter,
  );

  const visibleItems = filteredItems.slice(0, visibleCount); // Limit displayed items

  const handleLoadMore = () => {
    // setVisibleCount((prevCount) => prevCount + count); // Load more items
    setVisibleCount((prevCount) =>
      Math.min(prevCount + count, filteredItems.length),
    ); // Ensure we don't exceed the valid items count
  };

  // Reset visibleCount to default when the filter changes
  useEffect(() => {
    setVisibleCount(count);
  }, [filter]);

  const [loadingArr, setLoadingArr] = useState<boolean[]>(() =>
    Array(visibleItems.length).fill(true),
  );

  useEffect(() => {
    setLoadingArr(Array(visibleItems.length).fill(true));
  }, [visibleItems.length, filter]);

  const handleImageLoad = (idx: number) => {
    setLoadingArr((prev) => {
      const updated = [...prev];
      updated[idx] = false;
      return updated;
    });
  };

  return (
    <div className="mx-auto mt-6 max-w-5xl px-6 pb-10">
      <div className="flex justify-center pb-8">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Select tag" />
          </SelectTrigger>
          <SelectContent>
            {uniqueCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
        {visibleItems.map((item, index) => (
          <Card
            key={index}
            className={`p-0 ${loadingArr[index] ? 'bg-gray-300' : ''}`}
          >
            <CardContent className="p-0">
              <span
              // style={{ opacity: loadingArr[index] ? 0 : 1, display: 'block' }}
              >
                <ImageZoom
                  src={`${basePath}${item.src}`}
                  alt={`${index}`}
                  width={500}
                  height={500}
                  // onLoad={() => handleImageLoad(index)}
                  className="rounded-lg"
                />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
      {visibleCount < filteredItems.length && ( // Show button only if there are more items to load
        <div className="mt-6 flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default GalleryClient;
