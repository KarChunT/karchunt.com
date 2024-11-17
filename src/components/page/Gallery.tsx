import { GALLERY } from '@/constants';
import { FocusCards } from '@/components/ui/focus-cards';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';

const Gallery = () => {
  const [items, setItems] = useState(GALLERY);
  const [filter, setFilter] = useState('All');

  const uniqueCategories = Array.from(
    new Set(GALLERY.map((item) => item.category)),
  );
  const filteredItems = items.filter(
    (item) => filter === 'All' || item.category === filter,
  );

  return (
    <div className="mx-auto mt-8 max-w-5xl md:px-8">
      <div className="flex justify-center pb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter: {filter} <IconChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setFilter('All')}>
              All
            </DropdownMenuItem>
            {uniqueCategories.map((category, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => setFilter(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <FocusCards cards={filteredItems} />
    </div>
  );
};

export default Gallery;
