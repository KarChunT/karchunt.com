'use client';

import { FocusCards } from '@/components/ui/focus-cards';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState, useEffect } from 'react';

const GalleryClient = ({ items }: { items: GalleryProps[] }) => {
  const count = 10;
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

  return (
    <div className="mx-auto mt-8 max-w-5xl px-6 pb-10">
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

      <FocusCards cards={visibleItems} />

      {visibleCount < filteredItems.length && ( // Show button only if there are more items to load
        <div className="mt-6 flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  );
};

export default GalleryClient;
