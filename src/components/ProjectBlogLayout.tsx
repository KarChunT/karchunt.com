import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Control } from '@/components/ui/control';
import { useActivePageMetadata } from '@/hooks/useActivePageMetadata';
import { NAME, PERSONAL_IMAGE } from '@/constants';
import { FaRegClock, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLibraryOutline } from 'react-icons/io5';
import { VscSymbolKeyword } from 'react-icons/vsc';
import { TbClockEdit } from 'react-icons/tb';
import { getBasePath } from '@/lib/utils';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basePath = getBasePath();
  const metadata = useActivePageMetadata();
  const url = usePathname();

  return (
    <div className="container mx-auto mt-8 px-4">
      {/* header */}
      <div
        className="rounded-xl border px-8 py-12"
        style={{
          backgroundColor: '#fef9c3', // light yellow
          backgroundImage: [
            'linear-gradient(140deg, hsla(50,100%,70%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(45,98%,60%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(48,100%,85%,1), hsla(48,80%,60%,1) 17%, hsla(48,80%,60%,0.5) 20%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'multiply, multiply, normal',
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-black">{metadata.title}</h1>
        <p className="mb-4 text-black/80">{metadata.description}</p>
      </div>

      <article className="flex flex-col px-0 py-8 lg:flex-row">
        {/* metadata */}
        <div className="order-2 flex flex-col gap-4 p-4 text-sm lg:order-1 lg:mt-11 lg:w-[250px]">
          <div className="mb-1 flex items-center gap-3">
            <Image
              src={`${basePath}${PERSONAL_IMAGE}`}
              alt="karchunt"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div className="flex flex-col text-base font-bold">
              <p className="text-primary">{NAME}</p>
              <p className="text-999">Creator</p>
            </div>
          </div>

          <p className="text-999 text-base font-bold">Metadata</p>

          <div className="flex flex-row gap-3 lg:flex-col">
            <div className="flex items-center gap-2">
              <TbClockEdit size={16} />{' '}
              {new Date(metadata.lastUpdate || metadata.date).toDateString()}
            </div>

            <div className="flex items-center gap-2">
              <IoLibraryOutline size={16} className="shrink-0" />{' '}
              <div className="flex flex-wrap gap-2">
                {(metadata.languages && metadata.languages.length > 0
                  ? metadata.languages
                  : metadata.tags || []
                ).map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaRegClock size={16} /> <p>{metadata.readingTime.text}</p>
            </div>

            <div className="flex items-center gap-2">
              <VscSymbolKeyword size={16} />{' '}
              <p>{metadata.readingTime.words} words</p>
            </div>

            {metadata.repoUrl && (
              <div className="flex items-center gap-2">
                <FaGithub size={16} />
                <Link
                  href={metadata.repoUrl}
                  target="_blank"
                  className="!text-primary !font-medium !underline-offset-8 hover:underline"
                >
                  Source Code
                </Link>
              </div>
            )}

            {metadata.demoUrl && (
              <div className="flex items-center gap-2">
                <FaExternalLinkAlt size={16} />
                <Link
                  href={metadata.demoUrl}
                  target="_blank"
                  className="!text-primary !font-medium !underline-offset-8 hover:underline"
                >
                  Live Demo
                </Link>
              </div>
            )}
          </div>
          <Control url={url} />
        </div>

        <div className="order-1 min-w-0 flex-1 lg:order-2">{children}</div>
      </article>
    </div>
  );
}
