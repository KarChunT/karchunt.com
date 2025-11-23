'use client';

import Link from 'next/link';
import { useState } from 'react';
import { QUIZ } from '@/constants';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredQuiz = Object.entries(QUIZ).filter(([key, item]) =>
    key.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen">
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Good <span className="text-primary">Quiz</span>
          </h1>
          <p className="mt-4">
            Prepare for your certification exams and enhance your skills with
            our interactive scenario-based challenges and objective quizzes.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Input
            type="search"
            placeholder="Search quiz..."
            className="flex-grow"
            aria-label="Search quiz"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mx-auto mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredQuiz.length === 0 ? (
            <p className="col-span-full text-center text-white">
              Work In Progress. Coming soon...
            </p>
          ) : (
            filteredQuiz.map(([key, item]) => (
              <Link key={key} href={item.href} className="block h-full">
                <Card className="border-[oklch(1 0 0/10%)] mx-auto h-full w-full border-[#2e2c23]">
                  <CardHeader>
                    <CardTitle className="text-primary mt-1">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-white">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
