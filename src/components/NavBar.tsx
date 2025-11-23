'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'nextra/components';
import { IoMenu } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { getBasePath } from '@/lib/utils';
import {
  APP_NAME,
  APP_ICON,
  DOCUMENTATION,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/constants';

import MusicToggleButton from '@/components/MusicClient';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PageMapItem } from 'nextra';

interface DocSection {
  id: string;
  title: string;
  level: number;
  href?: string;
  children?: DocSection[];
}

const navigationItems = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Docs',
    items: DOCUMENTATION,
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Quiz',
    href: '/quiz',
  },
];

const additionalNavItems = [
  {
    label: 'GitHub',
    href: GITHUB_URL,
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    icon: FaLinkedin,
  },
];

const NavBar = ({ pageMap }: { pageMap: PageMapItem[] }) => {
  const basePath = getBasePath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<string[]>([]);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(
    null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const pathHref = pathname.replace(/\/$/, '');

  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const toggleDesktopMenu = (label: string) => {
    setActiveDesktopMenu((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDesktopMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="nextra-border sticky top-0 z-30 border-b bg-neutral-900">
      <nav
        style={{ height: 'var(--nextra-navbar-height)' }}
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4"
      >
        <Link href="/" className="hover:opacity-75">
          <div className="flex items-center justify-center gap-2">
            <Image
              src={`${basePath}${APP_ICON}`}
              alt="Logo"
              width={24}
              height={24}
            />
            <b>{APP_NAME}</b>
          </div>
        </Link>

        {/* content */}
        <div className="flex gap-4">
          {/* Desktop Navigation - Only 1 level */}
          <div
            className="hidden md:flex md:items-center md:gap-1"
            ref={dropdownRef}
          >
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-2 text-sm font-medium text-gray-400 transition-colors ${
                      pathHref === item.href ? 'text-white' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => toggleDesktopMenu(item.label)}
                      className={`hover:bg-accent hover:text-accent-foreground inline-flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-400 transition-colors ${
                        pathHref.startsWith('/docs') ? 'text-white' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'ml-1 h-4 w-4 transition-transform',
                          activeDesktopMenu === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                    {/* Second-level dropdown */}
                    {activeDesktopMenu === item.label && item.items && (
                      <div className="border-border bg-background absolute top-full left-0 z-50 mt-1 w-64 rounded-lg border shadow-lg">
                        <div className="p-2">
                          {Object.entries(item.items).map(([key, subItem]) => (
                            <Link
                              key={key}
                              href={subItem.href}
                              className="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm text-gray-400 transition-colors"
                              onClick={() => setActiveDesktopMenu(null)}
                            >
                              <div className="font-medium">{subItem.title}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Desktop: Button Group */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:gap-4">
            <Search />
            <MusicToggleButton />
            {additionalNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} target="_blank">
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>

          {/* Mobile: button group */}
          <div className="flex items-center gap-4 md:hidden">
            <MusicToggleButton />
            {additionalNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.label} href={item.href} target="_blank">
                  <Icon size={24} />
                </Link>
              );
            })}

            <div
              className="relative h-8 w-8 transition-transform duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                  mobileMenuOpen
                    ? 'scale-90 opacity-0'
                    : 'scale-100 opacity-100'
                }`}
              >
                <IoMenu size={24} />
              </span>

              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
                  mobileMenuOpen
                    ? 'scale-100 rotate-90 opacity-100'
                    : 'scale-90 opacity-0'
                }`}
              >
                <RxCross1 size={24} />
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-[var(--nextra-navbar-height)] right-0 bottom-0 left-0 z-50 md:hidden">
          <div className="border-border bg-background h-full w-full overflow-auto px-4 py-4 sm:px-6">
            <div className="mx-auto max-w-7xl space-y-1 px-4 pt-2 pb-4 sm:px-6">
              <div className="relative mb-3">
                <Search />
              </div>

              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`hover:bg-accent hover:text-accent-foreground block w-full rounded-md px-2 py-2 text-sm font-medium text-gray-400 transition-colors ${
                        pathHref === item.href ? 'text-white' : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileMenu(item.label)}
                        className={`hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-gray-400 transition-colors`}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'ml-1 h-4 w-4 transition-transform',
                            openMobileMenus.includes(item.label) &&
                              'rotate-180',
                          )}
                        />
                      </button>
                      {/* Mobile submenu */}
                      {openMobileMenus.includes(item.label) && item.items && (
                        <div className="mt-2 space-y-1 pl-4">
                          {Object.entries(item.items).map(([key, subItem]) => (
                            <SubMenuData
                              key={key}
                              pageMap={pageMap}
                              subItem={subItem}
                              indicator={subItem.href}
                              setMobileMenuOpen={setMobileMenuOpen}
                              toggleMobileMenu={toggleMobileMenu}
                              openMobileMenus={openMobileMenus}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SubMenuData = ({
  pageMap,
  indicator,
  subItem,
  setMobileMenuOpen,
  toggleMobileMenu,
  openMobileMenus,
}: {
  pageMap: PageMapItem[];
  indicator: string;
  subItem: any;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileMenu: (label: string) => void;
  openMobileMenus: string[];
}) => {
  const pathname = usePathname();
  const sectionName = indicator.split('/')[2];
  // Find the /docs route
  const docsNode = pageMap.find((item: any) => item.route === '/docs');
  const docsChildren = (docsNode as any)?.children || [];

  const currentDocRoot = docsChildren.find(
    (item: any) => item.name === sectionName,
  );

  const currentDocRootChildren = (currentDocRoot as any)?.children ?? [];

  const convertItem = (item: any, level: number): DocSection => {
    const node: DocSection = {
      id: item.name ?? item.title ?? Math.random().toString(),
      title: item.title ?? item.name ?? '',
      level,
      href: item.route,
      children: [],
    };

    if (item.children && Array.isArray(item.children) && item.children.length) {
      // skip the first child like the top-level behavior
      const childItems = item.children.slice(1);
      if (childItems.length) {
        node.children = childItems.map((child: any) =>
          convertItem(child, level + 1),
        );
      } else {
        delete node.children;
      }
    } else {
      // remove empty children to keep shape clean
      delete node.children;
    }

    return node;
  };

  const hierarchy: DocSection[] = [];
  let currentSection: DocSection | null = null;
  // keep previous behavior of skipping first element if present
  (currentDocRootChildren ?? []).slice(1).forEach((item: any) => {
    if (item.type === 'separator') {
      // start a new section group
      currentSection = {
        id: item.name,
        title: item.title,
        level: 1,
        children: [],
      };
      hierarchy.push(currentSection);
    } else {
      // convert the item (and its nested children) into DocSection(s)
      const node = convertItem(item, currentSection ? 2 : 1);
      if (currentSection) {
        currentSection.children = currentSection.children || [];
        currentSection.children.push(node);
      } else {
        // no active separator — push as top-level entry
        hierarchy.push(node);
      }
    }
  });

  const renderHierarchy = (sections: DocSection[]) => {
    return (
      <ul className="space-y-1">
        {sections.map((section) => {
          // Normalize paths to ignore trailing slashes
          const isActive =
            section.href &&
            pathname.replace(/\/$/, '') === section.href.replace(/\/$/, '');
          return (
            <li key={section.id}>
              {section.href &&
              (!section.children || section.children.length === 0) ? (
                <Link
                  href={section.level >= 2 && section.href ? section.href : '#'}
                >
                  <button
                    className={cn(
                      'hover:bg-accent hover:text-accent-foreground w-full rounded-md px-3 py-2 text-left text-sm text-gray-400 transition-colors',
                      isActive && 'bg-accent text-white',
                    )}
                    style={{ paddingLeft: `${section.level * 12}px` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {section.title}
                      <FiLink className="inline-block h-4 w-4 opacity-70" />
                    </span>
                  </button>
                </Link>
              ) : (
                <div
                  className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-400"
                  style={{ paddingLeft: `${section.level * 12}px` }}
                >
                  {section.title}
                </div>
              )}
              {section.children && (
                <div className="mt-1">{renderHierarchy(section.children)}</div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      {hierarchy.length !== 0 ? (
        <div>
          <button
            onClick={() => toggleMobileMenu(subItem.title)}
            className={`hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-gray-400 transition-colors`}
          >
            {subItem.title}
            <ChevronDown
              className={cn(
                'ml-1 h-4 w-4 transition-transform',
                openMobileMenus?.includes(subItem.title) && 'rotate-180',
              )}
            />
          </button>
          {openMobileMenus?.includes(subItem.title) && (
            <div className="mt-2 space-y-1 pl-4">
              {renderHierarchy(hierarchy)}
            </div>
          )}
        </div>
      ) : (
        <Link
          href={subItem.href}
          className="hover:bg-accent hover:text-accent-foreground block rounded-md px-2 py-2 text-sm text-gray-400 transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="font-medium">{subItem.title}</div>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
