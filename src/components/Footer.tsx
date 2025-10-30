import Link from 'next/link';
import { APP_NAME } from '@/constants';

const footerLinks = [
  {
    title: 'More from me',
    links: [
      { href: '/about', label: 'About' },
      { href: '/work-experiences', label: 'Work Experiences' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/certificate-journey', label: 'Certificate Journey' },
      { href: '/kubestronaut', label: 'Kubestronaut Journey' },
    ],
  },
  {
    title: 'Utility Tools',
    links: [
      { href: '/color-picker', label: 'Color Picker' },
      { href: '/md-playground', label: 'MarkDown Playground' },
    ],
  },
  {
    title: 'Developer Resources',
    links: [
      {
        href: '/good-tools-and-websites',
        label: 'Good Tools & Websites',
      },
      {
        href: '/software-glossary',
        label: 'Software Glossary',
      },
    ],
  },
  {
    title: 'Additional Links',
    links: [{ href: '/rss.xml', label: 'RSS Feed' }],
  },
];

const Footer = () => {
  return (
    <footer className="nextra-border border-t bg-neutral-900">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-start px-4">
        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="mb-4 text-xs">{item.title}</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link className="hover:text-foreground" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-border h-px" />
        <div className="text-muted-foreground py-4 text-center text-xs">
          <p>
            Copyright © {new Date().getFullYear()} {APP_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
