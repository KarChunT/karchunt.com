"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex-center flex-col gap-6 pt-16">
      {NAV_LINKS.map((item) => {
        const isActive =
          (pathname.includes(item.href) && item.href.length > 1) ||
          pathname === item.href;

        return (
          <SheetClose asChild key={item.key}>
            <Link href={item.href}>
              <p
                className={`${
                  isActive ? "text-bold text-primary" : "text-medium"
                }`}
              >
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors hover:cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="top" className="h-full w-full border-none">
        <Link href="/" className="flex items-center gap-1">
          <Avatar>
            <AvatarImage
              width={48}
              height={48}
              alt="IsPenguin"
              src="/assets/icons/ispenguin.svg"
            />
            <AvatarFallback>KC</AvatarFallback>
          </Avatar>
          <p className="logo-text-bold">
            Kar<span className="text-primary">ChunT</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
