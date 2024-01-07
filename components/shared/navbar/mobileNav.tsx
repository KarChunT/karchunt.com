"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { siteMetaData } from "@/utils/siteMetaData";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col items-start gap-5">
      {NAV_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.href) && item.href.length > 1) ||
          pathname === item.href;

        return (
          <li
            key={item.key}
            className={`${
              isActive ? "text-primary decoration-primary" : "text-current"
            } underline-offset-8 hover:underline`}
          >
            <SheetClose asChild key={item.key}>
              <Link href={item.href}>{item.label}</Link>
            </SheetClose>
          </li>
        );
      })}
    </ul>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/icons/hamburger.svg`}
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors hover:cursor-pointer sm:hidden"
          priority
        />
      </SheetTrigger>
      <SheetContent side="right" className="flex h-full flex-col gap-6">
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
          <p className="logo-text-bold">
            Kar<span className="text-primary">ChunT</span>
          </p>
        </Link>

        <Separator className="border" />
        <NavContent />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
