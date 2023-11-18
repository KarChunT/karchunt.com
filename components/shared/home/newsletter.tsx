import Link from "next/link";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="mb-6">
      <h2 className="text-[27px] font-semibold leading-tight md:text-4xl">
        Newsletter
      </h2>
      <div className="mt-6">
        <p className="text-lg leading-normal">
          Subscribe to my newsletter and never miss any latest updates when I
          write something new!
        </p>
        <Button variant="default" asChild className="mt-6">
          <Link href="https://karchunt.substack.com/">Subscribe</Link>
        </Button>
      </div>
    </section>
  );
};

export default Newsletter;
