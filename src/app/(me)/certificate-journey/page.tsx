import Link from 'next/link';
import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';
import { readFile } from 'fs/promises';
import { getBasePath, getFileFullPath } from '@/lib/utils';
import { CERTIFICATES_JSON_PATH } from '@/constants';

export const metadata = {
  title: 'Certificate Journey',
};

const page = async () => {
  const basePath = getBasePath();
  const fullPath = getFileFullPath(CERTIFICATES_JSON_PATH);
  const allCertificates = JSON.parse(await readFile(fullPath, 'utf8'));
  const certificates = allCertificates.map((cert) => ({
    title: cert.year,
    content: (
      <div key={cert.year}>
        <div className="mb-4">
          {cert.certificates.map((certificate, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
            >
              {certificate.certified ? '✅' : '💪'} {certificate.name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {cert.certificates.map((certificate, index) =>
            certificate.certified ? (
              <Link key={index} href={certificate.link}>
                <Image
                  src={`${basePath}${certificate.src}`}
                  alt={certificate.name}
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </Link>
            ) : null,
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="container mx-auto px-2 py-4 lg:py-8">
      <div className="mx-auto max-w-[58rem] overflow-hidden px-4">
        <Timeline data={certificates} />
      </div>
    </div>
  );
};

export default page;
