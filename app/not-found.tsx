import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex-center min-h-full flex-col text-center">
      <p className="text-base font-semibold text-primary">404</p>
      <h1 className="text-3xl font-bold sm:text-5xl">Page not found</h1>
      <Button className="mt-5" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
