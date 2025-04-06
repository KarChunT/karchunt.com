import Image from 'next/image';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { GOODTOOLSANDWEBSITES } from '@/constants';

const page = () => {
  return (
    <div>
      <div className="@container container mx-auto max-w-5xl px-6 py-4 lg:py-8">
        <div className="px-4 text-center">
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Good <span className="text-primary">Tools & Websites</span>
          </h1>
          <p className="mt-4">
            The road to freedom shares and introduces good tools and websites
            from here.
          </p>
        </div>
        <div className="mx-auto mt-8">
          <Cards>
            {GOODTOOLSANDWEBSITES.map((item, index) => (
              <Card
                key={index}
                href={item.href}
                title={item.title}
                icon={
                  <Image
                    width={24}
                    alt="test"
                    height={24}
                    src={item.imageSrc}
                  />
                }
              >
                {item.description}
              </Card>
            ))}
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default page;
