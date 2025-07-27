import { APP_NAME } from '@/constants';

const footer = () => {
  return (
    <footer className="mt-auto border-t bg-transparent py-8">
      <div className="container mx-auto flex flex-col gap-4 text-center">
        <div>
          <p className="text-sm font-semibold">
            Copyright © {new Date().getFullYear()} {APP_NAME}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
