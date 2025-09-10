'use client';

import Link from 'next/link';
import { useState } from 'react';
import { DOCUMENTATION } from '@/constants';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoc = Object.entries(DOCUMENTATION).filter(([key, item]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Good <span className="text-primary">Documentation</span>
          </h1>
          <p className="mt-4">
            The road to freedom shares and introduces my documentation from
            here.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Input
            type="search"
            placeholder="Search documentation..."
            className="flex-grow"
            aria-label="Search documentation"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredDoc.map(([key, item]) => {
            const Icon = item.icon;
            return (
              <Link key={key} href={item.href} className="block h-full">
                <Card className="border-[oklch(1 0 0/10%)] mx-auto h-full w-full border-[#2e2c23]">
                  <CardHeader>
                    <div>
                      <Icon
                        className="rounded-md border border-[#2e2c23] p-[6px]"
                        size={36}
                      />
                    </div>
                    <CardTitle className="text-primary mt-1">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-white">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
