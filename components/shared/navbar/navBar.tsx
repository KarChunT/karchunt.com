import Link from "next/link";

import SearchButton from "./searchButton";
import Theme from "./theme";
import MobileNav from "./mobileNav";

import { NAV_LINKS } from "@/constants";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavBar = () => {
  return (
    <nav className="flex-between relative z-50 w-full gap-5 py-5">
      <Link href="/" className="flex items-center gap-2">
        <Avatar>
          <AvatarImage
            width={48}
            height={48}
            alt="karchunt"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/images/karchunt.jpeg`}
          />
          <AvatarFallback>KC</AvatarFallback>
        </Avatar>

        <p className="logo-text-bold sm:block">
          Kar<span className="text-primary">ChunT</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="hidden sm:block">
            {link.label}
          </Link>
        ))}

        {/* <SearchButton /> */}
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
