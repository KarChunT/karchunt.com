/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconSun,
  IconMoon,
  IconMenu2,
  IconCloud,
  IconCloudRain,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { NAV_LINKS, SOCIAL_MEDIAS } from '@/constants';

const RainingIcon = ({ delay }: { delay: number }) => {
  const iconSrc = '/assets/images/penguin-nobg.webp';
  return (
    <motion.div
      className="absolute"
      initial={{ x: `${Math.random() * 100}vw`, y: '-10vh', rotate: 0 }}
      animate={{
        y: '110vh',
        rotate: 360,
      }}
      transition={{
        y: {
          duration: Math.random() * 5 + 5, // 5-10 seconds
          repeat: Infinity,
          delay: delay,
          ease: 'linear',
        },
        rotate: {
          duration: Math.random() * 3 + 2, // 2-5 seconds
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <Image src={iconSrc} alt="raining-icon" width={48} height={48} />
    </motion.div>
  );
};

const NavBar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isRaining, setIsRaining] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const count = 30;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`container sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-background'
        }`}
      >
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/assets/images/penguin-nobg.webp"
                alt="karchunt"
                width={24}
                height={24}
              />
              <span className="inline-block font-bold">KarChunT</span>
            </Link>

            {/* normal nav */}
            <nav className="hidden gap-6 md:flex">
              {NAV_LINKS.map((nav_link) => (
                <Link
                  href={nav_link.href}
                  key={nav_link.key}
                  className={`flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary/80 ${
                    pathname === nav_link.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {nav_link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              {SOCIAL_MEDIAS.map((social_media, index) => {
                const SocialMediaIcon = social_media.icon;
                return (
                  <Link
                    key={index}
                    href={social_media.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      <SocialMediaIcon className="h-5 w-5" />
                      <span className="sr-only">{social_media.label}</span>
                    </div>
                  </Link>
                );
              })}

              <Button
                variant="ghost"
                size="sm"
                className="w-9 px-0"
                onClick={() => setIsRaining(!isRaining)}
              >
                {isRaining ? (
                  <IconCloud className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <IconCloudRain className="h-[1.2rem] w-[1.2rem]" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-9 px-0"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <IconSun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <IconMoon className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>

              {/* mobile navbar */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-9 px-0 md:hidden"
                  >
                    <IconMenu2 className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((nav_link) => (
                      <Link
                        key={nav_link.key}
                        href={nav_link.href}
                        className={`text-sm font-medium text-muted-foreground transition-colors hover:text-primary/80 ${
                          pathname === nav_link.href
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        } `}
                      >
                        {nav_link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </nav>
          </div>
        </div>
      </header>

      {isRaining && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {[...Array(count)].map((_, i) => (
            <RainingIcon key={i} delay={i * 0.2} />
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
