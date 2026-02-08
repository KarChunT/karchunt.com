import Link from 'next/link';
import { APP_NAME, FOOTER_LINKS } from '@/app/constants';

const Footer = () => {
  return (
    <footer className="nextra-border z-10 border-t bg-neutral-900">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between px-4">
        <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4">
          {FOOTER_LINKS.map((item) => (
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
        <div className="bg-border h-px w-full" />
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
