import { DOCUMENTATION } from '@/constants';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Docs = () => {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <HoverEffect items={DOCUMENTATION} />
    </div>
  );
};

export default Docs;
