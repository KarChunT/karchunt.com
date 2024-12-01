import React from 'react';
import { DOCUMENTATION } from '@/constants';
import { TreeNode } from '@/components/shared/treeNode';
import { BorderBeam } from '@/components/ui/border-beam';

const DocHierarchy = ({ data }: { data: string }) => {
  const docData = DOCUMENTATION.find(
    (doc) => doc.title.toLowerCase() === data.toLowerCase(),
  );

  return (
    <div className="container mx-auto flex min-h-screen flex-col gap-8 px-4 py-10">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-primary">{docData?.title}</span>
        </h1>
        <p className="text-center text-lg">
          The roadmap of {docData?.title} topic.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-lg border border-neutral-700 p-4">
        <TreeNode data={docData} />
        <BorderBeam />
      </div>
    </div>
  );
};

export default DocHierarchy;
