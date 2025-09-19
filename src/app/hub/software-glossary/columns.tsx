'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const columns: ColumnDef<GlossaryItem>[] = [
  {
    accessorKey: 'term',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Term
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const term = row.getValue('term') as string;
      return (
        <span className="text-primary flex w-full justify-center">{term}</span>
      );
    },
  },
  {
    accessorKey: 'definition',
    header: 'Definition',
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="w-full justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const category = row.getValue('category') as string;
      return <span className="flex w-full justify-center">{category}</span>;
    },
  },
];
