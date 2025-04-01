import { APPNAME } from '@/constants';

const footer = () => {
  return (
    <footer className="bg-fd-card mt-auto border-t py-12">
      <div className="container mx-auto flex flex-col gap-4 text-center">
        <div>
          <p className="text-sm font-semibold">
            Copyright © {new Date().getFullYear()} {APPNAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
