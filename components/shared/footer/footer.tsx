import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { MdRssFeed } from "react-icons/md";
import { Separator } from "../../ui/separator";
import { siteMetaData } from "@/utils/siteMetaData";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 pt-12">
      <Separator />

      <div className="flex-center flex-col gap-1 text-center">
        <p>© {new Date().getFullYear()} KarChunT. All rights reserved.</p>
        <div className="flex-center gap-1">
          <Link href={siteMetaData.github}>
            <IoLogoGithub size="24px" />
          </Link>
          <Link href={siteMetaData.linkedin}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/icons/linkedin.svg`}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href={`${process.env.NEXT_PUBLIC_BASE_PATH}/rss.xml`}>
            <MdRssFeed color="#ee802f" size="24px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
