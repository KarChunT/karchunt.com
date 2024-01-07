"use client";

import Link from "next/link";
import Theme from "./theme";
import MobileNav from "./mobileNav";
import { NAV_LINKS } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { siteMetaData } from "@/utils/siteMetaData";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex-between relative z-50 w-full gap-5 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            width={48}
            height={48}
            alt="karchunt"
            src={siteMetaData.siteLogo}
          />
          <AvatarFallback>KC</AvatarFallback>
        </Avatar>

        <p className="logo-text-bold sm:block">
          Kar<span className="text-primary">ChunT</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        {NAV_LINKS.map((link) => {
          const isActive =
            (pathname.includes(link.href) && link.href.length > 1) ||
            pathname === link.href;

          return (
            <Link
              href={link.href}
              key={link.key}
              className={`${
                isActive ? "text-primary decoration-primary" : "text-current"
              } hidden underline-offset-8 hover:underline sm:block`}
            >
              {link.label}
            </Link>
          );
        })}

        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
