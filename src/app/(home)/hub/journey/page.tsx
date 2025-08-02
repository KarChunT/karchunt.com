import Link from 'next/link';
import Image from 'next/image';
import { CERTIFICATES } from '@/constants';
import { Timeline } from '@/components/ui/timeline';

const page = () => {
  const certificates = CERTIFICATES.map((cert) => ({
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
                  src={certificate.src}
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
    <div className="container mt-16 px-2 py-4 lg:py-8">
      <div className="mx-auto max-w-[58rem] overflow-hidden px-4">
        <Timeline data={certificates} />
      </div>
    </div>
  );
};

export default page;
