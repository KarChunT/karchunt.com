// import Image from 'next/image';
import Link from 'next/link';
import { KUBESTRONAUT } from '@/app/constants';
import { Spotlight } from '@/components/ui/spotlight-new';
import { ImageZoom as Image } from 'fumadocs-ui/components/image-zoom';
import { getBasePath } from '@/lib/utils';

export const metadata = {
  title: 'Kubestronaut',
};

const page = () => {
  const basePath = getBasePath();
  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            My <span className="text-primary">Kubestronaut</span> Journey.
          </h1>
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <b>
              <span className="text-primary">#8</span> Kubestronaut in Malaysia,
              the world&apos;s <span className="text-primary">#1300+</span>🌍
            </b>
            <b>
              <span className="text-primary">#1</span> Kubestronaut in Penang,
              Malaysia
            </b>
            {/* <b>
              <span className="text-primary">#1</span> Kubestronaut at Intel
              Corporation
            </b> */}
            <b>
              Refer my{' '}
              <Link
                className="text-primary underline-offset-8 hover:cursor-pointer hover:underline"
                href={KUBESTRONAUT.linkedinPost}
              >
                LinkedIn post
              </Link>
            </b>
          </div>
        </div>

        <div className="mx-auto mt-8 grid gap-8">
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <div className="flex justify-center">
              <div className="relative h-32 w-32">
                <Image
                  src={`${basePath}${KUBESTRONAUT.kubestronautCert}`}
                  alt="Kubestronaut-cert"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            {KUBESTRONAUT.certificates.slice(0, 2).map((certificate, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative h-32 w-32">
                  <Image
                    src={`${basePath}${certificate}`}
                    alt={`Certificate ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            {KUBESTRONAUT.certificates.slice(2, 5).map((certificate, index) => (
              <div key={index} className="flex justify-center">
                <div className="relative h-32 w-32">
                  <Image
                    src={`${basePath}${certificate}`}
                    alt={`Certificate ${index + 1}`}
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 flex items-center justify-center">
          <Image
            src={`${basePath}${KUBESTRONAUT.cncfImage}`}
            alt="Kubestronaut-cncf"
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
