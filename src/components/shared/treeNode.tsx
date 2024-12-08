import React, { useState } from 'react';
import Link from 'next/link';
import { IconChevronRight, IconChevronDown } from '@tabler/icons-react';

export function TreeNode({ data }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative pl-7">
      <div className="flex items-center py-2">
        <span className="absolute bottom-0 left-2.5 top-0 w-px bg-gray-300"></span>
        <span className="absolute left-2.5 top-1/2 h-px w-7 bg-gray-300"></span>
        <div className="relative">
          <button
            onClick={toggleOpen}
            className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-white transition-colors hover:bg-green-600"
            aria-expanded={
              data.hierarchy && data.hierarchy.length ? isOpen : undefined
            }
          >
            {data.hierarchy && data.hierarchy.length ? (
              isOpen ? (
                <IconChevronDown className="h-4 w-4" />
              ) : (
                <IconChevronRight className="h-4 w-4" />
              )
            ) : (
              '•'
            )}
          </button>
          <span className="absolute left-1/2 top-1/2 h-full w-px -translate-x-[0.5px] -translate-y-1/2 bg-gray-300"></span>
        </div>
        <span className="ml-2 text-sm font-medium">
          {data.link ? (
            <Link href={data.link}>{data.name || data.title}</Link>
          ) : (
            <>{data.name || data.title}</>
          )}
        </span>
      </div>

      {data.hierarchy && (
        <div className={`${isOpen ? 'block' : 'hidden'}`}>
          {data.hierarchy.map((child, index) => (
            <TreeNode key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
}
