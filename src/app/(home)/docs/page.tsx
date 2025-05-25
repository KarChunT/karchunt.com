'use client';

import { useState } from 'react';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { DOCUMENTATION } from '@/constants';
import { Input } from '@/components/ui/input';

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocumentation = DOCUMENTATION.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            My <span className="text-primary">Documentation</span>
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
        <div className="mx-auto mt-8">
          <Cards>
            {filteredDocumentation.map((doc, index) => (
              <Card
                key={index}
                href={doc.link}
                title={doc.title}
                icon={
                  <div className="flex size-6 items-center justify-center">
                    {doc.icon}
                  </div>
                }
              >
                {doc.description}
              </Card>
            ))}
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default Page;
