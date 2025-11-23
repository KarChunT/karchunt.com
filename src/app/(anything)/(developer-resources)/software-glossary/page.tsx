import { columns } from './columns';
import { DataTable } from './data-table';
import { readFile } from 'fs/promises';
import { getFileFullPath } from '@/lib/utils';
import { SOFTWARE_GLOSSARY_JSON_PATH } from '@/constants';

const page = async () => {
  const fullPath = getFileFullPath(SOFTWARE_GLOSSARY_JSON_PATH);
  const glossary: GlossaryItem[] = JSON.parse(await readFile(fullPath, 'utf8'));

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
