import Link from "next/link";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { siteMetaData } from "@/utils/siteMetaData";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 pb-4 pt-12">
      <Separator />

      <div className="flex-center flex-col gap-1 text-center">
        <p>© 2023 KarChunT. All rights reserved.</p>
        <div className="flex gap-1">
          <Link href={siteMetaData.github}>
            <Image
              src="/assets/icons/github.svg"
              alt="github"
              className="github-icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href={siteMetaData.linkedin}>
            <Image
              src="/assets/icons/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
