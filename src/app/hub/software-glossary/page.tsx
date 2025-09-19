'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from './data-table';

const page = () => {
  const [glossary, setGlossary] = useState<GlossaryItem[]>([]);

  useEffect(() => {
    fetch('/data/software-glossary.json')
      .then((res) => res.json())
      .then((data) => setGlossary(data));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Software <span className="text-primary">Glossary</span>
          </h1>
          <p className="mt-4">
            The road to freedom shares and introduces software terms and their
            definitions from here.
          </p>
        </div>

        <div className="mx-auto mt-8">
          <DataTable columns={columns} data={glossary} />
        </div>
      </div>
    </div>
  );
};

export default page;
