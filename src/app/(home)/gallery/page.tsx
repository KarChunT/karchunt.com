'use client';

import { GALLERY } from '@/constants';
import { FocusCards } from '@/components/ui/focus-cards';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState(GALLERY);
  const [filter, setFilter] = useState('All');

  const uniqueCategories = [
    'All',
    ...Array.from(new Set(GALLERY.map((item) => item.category))),
  ];

  const filteredItems = items.filter(
    (item) => filter === 'All' || item.category === filter,
  );

  return (
    <div className="mx-auto mt-8 max-w-5xl px-6">
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

      <FocusCards cards={filteredItems} />
    </div>
  );
};

export default Gallery;
