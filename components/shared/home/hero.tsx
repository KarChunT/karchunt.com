import Image from "next/image";

const Hero = () => {
  return (
    <section className="padding-y flex flex-col gap-4 md:flex-row">
      <div className="flex-start flex-1 flex-col">
        <p className="text-lg font-semibold uppercase leading-normal text-primary">
          Kar Chun 🐧 Say Hello!
        </p>
        <h1 className="mt-4 text-[40px] font-bold leading-tight md:text-5xl">
          Gateway <span className="text-primary">Farm</span>
        </h1>
        <p className="mt-4 text-lg font-medium leading-normal">
          I&apos;m an{" "}
          <span className="text-primary">
            Infrastructure and DevOps Engineer
          </span>{" "}
          at <span className="text-[#00C7FD]">Intel</span>. I love to code and
          design software architecture.
        </p>
      </div>

      <div className="relative flex flex-1 justify-start md:justify-end">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/ispenguin-withbg.png`}
          alt="IsPenguin"
          width={400}
          height={400}
          className="h-auto rounded-xl object-cover max-[700px]:w-[250px]"
          sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
        />
      </div>
    </section>
  );
};

export default Hero;
