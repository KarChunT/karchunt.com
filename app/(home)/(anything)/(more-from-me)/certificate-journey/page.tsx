import Link from 'next/link';
import Image from 'next/image';
import { Timeline } from '@/components/ui/timeline';
import { getBasePath } from '@/lib/utils';

export const metadata = {
  title: 'Certificate Journey',
};

const allCertificates = [
  {
    year: '2025',
    certificates: [
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        src: '/certificates/cka.webp',
        link: 'https://www.credly.com/badges/8fff7b8d-3415-4263-b4fe-4f96ff52484e',
        certified: true,
      },
      {
        name: 'Certified Kubernetes Security Specialist (CKS)',
        src: '/certificates/cks.webp',
        link: 'https://www.credly.com/badges/d044d10b-35b0-4103-8c39-cbc956320578',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Associate (KCNA)',
        src: '/certificates/kcna.webp',
        link: 'https://www.credly.com/badges/66e3e661-2a7f-44ba-b137-a4ecab838370',
        certified: true,
      },
      {
        name: 'Kubernetes and Cloud Native Security Associate (KCSA)',
        src: '/certificates/kcsa.webp',
        link: 'https://www.credly.com/badges/c97c8086-4abc-4450-84ca-1f33d8cc5824',
        certified: true,
      },
      {
        name: 'Kubestronaut',
        src: '/certificates/kubestronaut.webp',
        link: 'https://www.credly.com/badges/e22d7205-9c6f-40d5-b62f-d94a2e5a805a',
        certified: true,
      },
    ],
  },
  {
    year: '2024',
    certificates: [
      {
        name: 'LFD121: Developing Secure Software',
        src: '/certificates/lfd121.webp',
        link: 'https://www.credly.com/badges/cad91d1d-0327-46d8-aa99-21ccaf91c589',
        certified: true,
      },
    ],
  },
  {
    year: '2023',
    certificates: [
      {
        name: 'Professional Scrum Master™ I (PSM I)',
        src: '/certificates/psm1.webp',
        link: 'https://www.credly.com/badges/a9a3bcd4-bfec-44bf-be2f-fb91579c0ee6',
        certified: true,
      },
      {
        name: 'CKAD: Certified Kubernetes Application Developer',
        src: '/certificates/ckad.webp',
        link: 'https://www.credly.com/badges/0cf9e91e-2736-46cb-a987-f558e099b30e',
        certified: true,
      },
    ],
  },
  {
    year: '2022',
    certificates: [
      {
        name: 'Certified Jenkins Engineer 2022',
        src: '/certificates/cje.webp',
        link: 'https://certificates.cloudbees.com/dc763bc8-1f25-4335-9bfd-f8f13ae03cf4#acc.jet6FUmf',
        certified: true,
      },
      {
        name: '[PCAP-31-03] PCAP™ – Certified Associate Python Programmer',
        src: '/certificates/pcap.webp',
        link: 'https://www.credly.com/badges/c2d73e1d-d0b4-4e27-a4fa-2a805f202fbc',
        certified: true,
      },
      {
        name: '[PCEP-30-01] PCEP – Certified Entry-Level Python Programmer',
        src: '/certificates/pcep.webp',
        link: 'https://www.credly.com/badges/3bac6f7f-53dd-40d8-a195-61284a31d8fd',
        certified: true,
      },
    ],
  },
];

const page = async () => {
  const basePath = getBasePath();
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
